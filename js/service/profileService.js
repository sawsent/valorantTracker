import maps from "../utilities/maps.js";
import agents from "../utilities/agents.js";

async function get(name, tag) {

    // test defaults
    if (name === '' || tag === '') {
        name = 'sawsent';
        tag = 'washd';
    }

    const profileResponse = await fetch(`https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`);
    let profile = await profileResponse.json();

    verify('profile', profile);

    profile = profile.data;

    const responseMatches = await fetch(`https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${profile.region}/${profile.puuid}?mode=competitive`)
    let matches = await responseMatches.json();

    verify('matches', matches);

    matches = matches.data;
    matches.forEach((match) => {
        match.meta.result = getResult(match);
    })


    const mmrResponse = await fetch(`https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr-history/${profile.region}/${profile.puuid}`)
    let mmr = await mmrResponse.json();

    verify('mmr', mmr);

    mmr = mmr.data;

    const filterables = await getFilterables();

    return {
        profile,
        matches,
        mmr,
        filterables,
    }
}

async function getFilterables() {
  
    return {
        agents: agents.get(),
        maps: maps.get().filter(map => map.narrativeDescription),
    }
}

function verify(location, response) {
    if (response.status != '200') {
        throw {
            location: location,
            data: response,
        }
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
        return (team === 'red') ? 'blue' : 'red';
    }
}



export default { get }