async function get(name, tag) {

    const profileResponse = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`);
    let profile = await profileResponse.json();
    profile = profile.data;

    const responseMatches = await fetch(`https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${profile.region}/${profile.puuid}`)
    let matches = await responseMatches.json();
    matches = matches.data.filter((match) => match.meta.mode === 'Competitive')

    matches.forEach((match) => {
        console.log(match);
        match.meta.result = getResult(match, profile.puuid);
    })

    console.log(profile.puuid)

    return {
        profile,
        matches,
    }
}

function getResult(match) {

    const team = match.stats.team.toLowerCase();

    if (match.teams[team].rounds_won === match.teams[team].rounds_lost) {
        return 'tie';
    }

    if (match.teams[team].rounds_won > match.teams[team].rounds_lost) {
        return 'win';
    }

    return 'loss'

}



export default { get }