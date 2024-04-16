import maps from "../data/maps.js";
import stringConverter from "../utilities/stringConverter.js";

function render(match, pov) {

    $('#variable').attr("href", "./css/match.css");
    
    const rounds = match.metadata.rounds_played;
    const map = maps.getByName(match.metadata.map);
    const main = $('#main');
    const bg = $(`<img id="bg" src="${map.splash}">`)
    
    main.empty();
    main.append(bg);

    const content = $('<div id="content">');

    const table = $('<div>', { id: 'statsTable' });

    table.append(createHeader(pov));
    const players = match.players.all_players.slice();

    players.sort((p1, p2) => p2.stats.score - p1.stats.score)

    players.forEach(player => {
        table.append(createPlayerCard(player, pov, rounds));
    })

    content.append(createMatchHeader(match.metadata));
    content.append(table);

    main.append(content);
    
}

function createMatchHeader(metadata) {
    const card = $('<div id="meta">');
    
    const regionContainer = $('<div id="region-container">');
    const gameInfoContainer = $('<div id="gameInfo-container">');

    const mapName = $('<div id="mapName">').text(metadata.map).appendTo(gameInfoContainer);

    const startTime = $('<div id="startTime">').text(metadata.game_start_patched).appendTo(gameInfoContainer);
    const length = $('<div id="length">').text(`${(metadata.game_length / 60).toFixed(0)} minutes`).appendTo(gameInfoContainer);
    const region = $('<div id="region">').html('Region: <p>&nbsp ' + metadata.region.toUpperCase() + '</p>').appendTo(regionContainer);
    const server = $('<div id="server">').html('Server: <p>&nbsp ' + metadata.cluster + '</p>').appendTo(regionContainer);

    card.append(gameInfoContainer);
    card.append(regionContainer);
    return card;
}

function createPlayerCard(player, pov, rounds, isHeader) {


    const card = $(`<div class="${isHeader ? 'header' : 'player-card'} ${player.team.toLowerCase()} ${stringConverter.getNormal(pov.name) == player.name ? 'pov' : ''}">`);
    card.append($(`<img>`, { class: 'agent', src: player.assets.agent.small }));

    const profileAndStats = $('<div class="profileandstats">');

    const profileAndRank = $('<div class="profileAndRank">');
    profileAndRank.append($('<img>', { class: 'rank', src: isHeader ? '' : `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${player.currenttier}/smallicon.png` }))

    const profileInfo = $('<div class="profileInfo">');
    profileInfo.append($('<div> class="username"').text(player.name));
    profileInfo.append($('<div> class="tag"').text('#' + player.tag));
    profileAndRank.append(profileInfo);

    profileAndStats.append(profileAndRank);

    const stats = $('<div class="stats">')

    stats.append($(`<div class="stat acs">`).text(isHeader ? 'ACS' : (player.stats.score / rounds).toFixed(0)));

    const kda = $('<div class="kda">');
    kda.append($(`<div class="stat kills">`).text(player.stats.kills));
    kda.append($(`<div class="stat deaths">`).text(player.stats.deaths));
    kda.append($(`<div class="stat assists">`).text(player.stats.assists));
    stats.append(kda);

    profileAndStats.append(stats);

    card.append(profileAndStats)

    card.click(() => window.location.hash = `/profile/${player.name}#${player.tag}`);

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


function renderQuery() {
    const main = $('#main');
    main.empty();
    main.append($('<h1>MATCH RENDER VIEW</h1>'))
}

export default { render, renderQuery }