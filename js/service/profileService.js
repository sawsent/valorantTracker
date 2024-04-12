async function get(name, tag) {

    const profileResponse = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`);
    const profile = await profileResponse.json();

    const responseMatches = await fetch(`https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/${profile.data.region}/${profile.data.puuid}`)
    let matches = await responseMatches.json();

    matches = matches.data.filter((match) => !(match.metadata === undefined) && match.metadata.mode_id === 'competitive')

    matches.forEach((match) => {
        console.log(match);
        match.metadata.result = getResult(match, profile.data.puuid);
        match.players.self = getPlayerInfo(match, profile.data.puuid);
    })

    console.log(profile.data.puuid)

    return {
        profile: profile.data,
        matches,
    }
}

function getResult(match, puuid) {

    const team = getPlayerInfo(match, puuid)['team'].toLowerCase();

    if (match.teams[team].rounds_won === match.teams[team].rounds_lost) {
        return 'tie';
    }

    return (match.teams[team].has_won) ? 'win' : 'loss';
}

function getPlayerInfo(match, puuid) {
    let player;
    match.players.all_players.forEach((pl) => {
        if (pl.puuid === puuid) {
            player = pl;
            return player;
        }
    })
    return player;
}

export default { get }