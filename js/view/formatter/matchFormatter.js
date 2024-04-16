function get(match) {
    return {
        mapLogoURL: `./resources/map/logo/${match.meta.map.name.toUpperCase()}.png`,
        date: date(match),
        gameScore: score(match),
        
        characterName: match.stats.character.name,
        agentImgURL: `https://media.valorant-api.com/agents/${match.stats.character.id}/displayicon.png`,
        acs: acs(match),
        stats: `${match.stats.kills} K / ${match.stats.deaths} D / ${match.stats.assists} A`,

        bg_color: bg_color(match)
    }
}

function score(match) {
    if (match.stats.team === 'Blue') {
        return `${match.teams.blue} - ${match.teams.red}`;
    }
    return `${match.teams.red} - ${match.teams.blue}`
}

function date(match) {
    let short = match.meta.started_at.split('T')[0];
    let d, mon, y;
    [ y, mon, d ] = short.split('-');
    return `${d} / ${mon} / ${y}`;
}



function acs(match) {
    let totalRounds = match.teams.red + match.teams.blue;
    return `ACS: ${(match.stats.score / totalRounds).toFixed(0)}`
}


function bg_color(match) {
    if (match.meta.result === 'win') {
        return "rgba(0, 104, 26, 0.205)"
    } else if (match.meta.result === 'loss') {
        return "rgba(199, 0, 0, 0.205)"
    }
    return "rgba(44, 44, 44, 0.205)"
}

export default { get }