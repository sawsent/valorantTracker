function render(data) {

    const { eu, na, ap } = data;

    $('#variable').attr("href", "./css/home.css");
    const main = $('#main');

    main.empty();

    const content = $('<div>', { class: 'content' });
    
    const card = $('<div>', { class: 'card' }).appendTo(content);
    
    const header = $('<div>', { id: 'header' }).appendTo(card);
    header.append($('<h1>').text('VALORANT STATS'));
    header.append($('<p>').text('Check Detailed Valorant Stats and Leaderboards'));
    
    const search = $('<div>', { id: 'search' }).appendTo(card);
    search.append($('<input>', { type: 'text', class: 'searchBox', id: 'username', placeholder: 'username' }));
    search.append($('<input>', { type: 'text', class: 'searchBox', id: 'tag', placeholder: 'tag' }));
    search.append($('<button>', { id: 'searchButton' }).text('Search'));
    
    const leaderboards = $('<div>', { id: 'leaderboards' }).appendTo(content);
    
    
    function createLeaderboard(player, region) {
        const leaderboard = $('<div>', { class: 'leaderboard' });
        leaderboard.append($('<img>', { src: `https://media.valorant-api.com/playercards/${player.PlayerCardID}/smallart.png`, alt: region }));
        leaderboard.append($('<h2>').text(player.gameName));
        leaderboard.append($('<p>').text(`Top ${region} Rating`));
        leaderboard.append($('<p>').text(player.rankedRating));
        leaderboard.click(() => window.location.hash = `/leaderboards/${region.toLowerCase()}`)
        return leaderboard;
    }
    
    leaderboards.append(createLeaderboard(eu, 'EU'));
    leaderboards.append(createLeaderboard(na, 'NA'));
    leaderboards.append(createLeaderboard(ap, 'APAC'));

    
    main.append(content);

    $('#searchButton').click(() => window.location.hash = `/profile/${$('#username').val()}#${$('#tag').val()}`);

}

export default { render }