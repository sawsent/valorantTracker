function render(match, pov) {

    $('#variable').attr("href", "./css/match.css");
    
    const rounds = match.metadata.rounds_played;
    console.log(match);
    console.log(pov)
    const main = $('#main');
    main.empty();
    const table = $('<div>', { id: 'statsTable' });

    table.append(createHeader(pov));
    const players = match.players.all_players.slice();

    players.sort((p1, p2) => p2.stats.score - p1.stats.score)

    players.forEach(player => {
        table.append(createPlayerCard(player, pov, rounds));
    })

    main.append(table);
    console.log(table);
}

function createPlayerCard(player, pov, rounds, isHeader) {

    const card = $(`<div class="player ${player.team.toLowerCase()} ${pov.name == player.name ? 'pov' : ''}">`);
    card.append($(`<img>`, { class: 'agent', src: player.assets.agent.small }));

    const profileAndStats = $('<div class="profileandstats">');

    const profileInfo = $('<div class="profileInfo">');
    profileInfo.append($('<div> class="username"').text(player.name));
    profileInfo.append($('<div> class="tag"').text('#' + player.tag));
    profileAndStats.append(profileInfo);

    const stats = $('<div class="stats">')

    stats.append($(`<div class="stat acs">`).text(isHeader ? 'ACS' : (player.stats.score / rounds).toFixed(0)));

    const kda = $('<div class="kda">');
    kda.append($(`<div class="stat kills">`).text(player.stats.kills));
    kda.append($(`<div class="stat deaths">`).text(player.stats.deaths));
    kda.append($(`<div class="stat assists">`).text(player.stats.assists));
    stats.append(kda);

    profileAndStats.append(stats);

    card.append(profileAndStats)

    card.click(() => window.location.hash = `/profile/${player.name}/${player.tag}`);

    return card;

}

function createHeader(pov) {
    const a = {
        team: 'grey',
        assets: {
            agent: {
                small: '',
            },
        },
        name: 'Username',
        tag: 'tag',
        stats: {
            score: 'ACS',
            kills: 'K',
            deaths: 'D',
            assists: 'A',
        }
    }
    return createPlayerCard(a, pov, 0, true);
}


export default { render }