import verify from "../utilities/verify.js";
import getVerified from "../utilities/getVerified.js";

async function get(name, tag) {

    // test defaults
    if (name === '' || tag === '') {
        name = 'sawsent';
        tag = 'washd';
    }

    const profile = (await getVerified('profile', `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`)).data;

    const matches = (await getVerified('matches', `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${profile.region}/${profile.puuid}?mode=competitive`)).data;
    matches.forEach((match) => {
        match.meta.result = getResult(match);
    })

    console.log(matches.length)

    const mmr = (await getVerified('mmr', `https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr-history/${profile.region}/${profile.puuid}`)).data;

    const filterables = {
        agents: (await getVerified('agents', `https://valorant-api.com/v1/agents?isPlayableCharacter=true`)).data,
        maps: (await getVerified('agents', `https://valorant-api.com/v1/maps`)).data.filter(map => map.narrativeDescription),
    }

    const filterabless = await getFilterables();

    return {
        profile,
        matches,
        mmr,
        filterables,
    }
}

async function getFilterables() {
    let agents, maps;


    let agentsResponse = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
    agentsResponse = await agentsResponse.json();
    verify('agents', agentsResponse);
    agents = agentsResponse.data;
    
    let mapsResponse = await fetch(`https://valorant-api.com/v1/maps`)
    mapsResponse = await mapsResponse.json();
    verify('maps', mapsResponse);
    maps = mapsResponse.data.filter(map => map.narrativeDescription);
    
    return {
        agents,
        maps,
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