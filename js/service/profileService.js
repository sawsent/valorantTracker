import verify from "../utilities/verify.js";
import getVerified from "../utilities/getVerified.js";

import agents from '../data/agents.js';
import maps from '../data/maps.js';

async function get(name, tag) {

    const profile = (await getVerified('profile', `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`)).data;

    const matches = (await getVerified('matches', `https://api.henrikdev.xyz/valorant/v1/by-puuid/lifetime/matches/${profile.region}/${profile.puuid}?mode=competitive`)).data;
    matches.forEach((match) => {
        match.meta.result = getResult(match);
    })

    console.log(matches.length)

    const mmr = (await getVerified('mmr', `https://api.henrikdev.xyz/valorant/v2/by-puuid/mmr-history/${profile.region}/${profile.puuid}`)).data;

    const filterables = {
        agents: agents.get(),
        maps: maps.get().filter(map => map.narrativeDescription),
    }

    return {
        profile,
        matches,
        mmr,
        filterables,
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