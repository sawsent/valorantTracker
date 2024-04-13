async function get(name, tag) {

    const profileResponse = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`);
    let profile = await profileResponse.json();
    profile = profile.data;

    const responseMatches = await fetch(`https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${profile.region}/${profile.puuid}`)
    let matches = await responseMatches.json();
    matches = matches.data.filter((match) => match.meta.mode === 'Competitive')//.slice(0, 20);
    // matches = [matches[0]]

    matches.forEach((match) => {
        match.meta.result = getResult(match, profile.puuid);
    })

    return {
        profile,
        matches,
    }
}

function getResult(match) {

    const team = match.stats.team.toLowerCase();

    if (match.teams.red === match.teams.blue) {
        return 'tie';
    }

    if (match.teams[team] > match.teams[oppositeTeam()]) {
        return 'win';
    }

    return 'loss'

    function oppositeTeam() {
        if (team === 'red') {
            return 'blue';
        }
        return 'red'
    }
}



export default { get }