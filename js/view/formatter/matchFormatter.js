function get(m) {
    return {
        mapLogoURL: mapImage(m),
        date: date(m),
        gameScore: score(m),
        
        characterName: agent(m),
        agentImgURL: agentImage(m),
        acs: acs(m),
        stats: kda(m),

        bg_color: bg_color(m)
    }
}

function mapImage(m) {
    return `./resources/map/logo/${m.meta.map.name.toUpperCase()}.png`
}

function score(m) {
    if (m.stats.team === 'Blue') {
        return `${m.teams.blue} - ${m.teams.red}`;
    }
    return `${m.teams.red} - ${m.teams.blue}`
}

function date(m) {
    let short = m.meta.started_at.split('T')[0];
    let d, mon, y;
    [ y, mon, d ] = short.split('-');
    return `${d} / ${mon} / ${y}`;
}

function agent(m) {
    return m.stats.character.name;
}

function agentImage(m) {
    return `https://media.valorant-api.com/agents/${m.stats.character.id}/displayicon.png`
}

function acs(m) {
    let totalRounds = m.teams.red + m.teams.blue;
    return `ACS: ${(m.stats.score / totalRounds).toFixed(0)}`
}

function kda(m) {
    return `${m.stats.kills} K / ${m.stats.deaths} D / ${m.stats.assists} A`
}

function bg_color(m) {
    if (m.meta.result === 'win') {
        return "rgba(0, 104, 26, 0.205)"
    } else if (m.meta.result === 'loss') {
        return "rgba(199, 0, 0, 0.205)"
    }
    return "rgba(44, 44, 44, 0.205)"
}

export default { get }