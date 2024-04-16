function render(players, region) {
    $('#variable').attr("href", "./css/leaderboard.css");
    const main = $('#main');

    main.empty();

    const content = $('<div>', { id: 'content', })

    const title = $(`
    <div class="title-card">
        <h1>${region.toUpperCase()} Leaderboard</h1>
        <p>Top players from the ${convert(region)} region</p>
    </div>
    `);
    

    players.forEach((player => content.append(createPlayerCard(player))));

    main.append(title);
    main.append(content);
};

function renderQuery() {

}

function convert(region) {
    switch (region) {
        case 'na':
            return 'North American';
        case 'eu':
            return 'European'
        case 'apac':
            return 'Asia Pacific'
        default:
            return '';
    }
}





function createPlayerCard(player) {
    const playerCardImgSrc = `https://media.valorant-api.com/playercards/${player.PlayerCardID}/smallart.png`;
    const rankImgSrc = `https://media.valorant-api.com/competitivetiers/03621f52-342b-cf4e-4f86-9350a49c6d04/${player.competitiveTier}/smallicon.png`;
    const classes = `player-card ${player.IsAnonymized ? 'anonymous' : 'normal'}`;

    const card = $(`
        <div class="${classes}">
            <div class="rank-container">
                <div class="rank-number-container"><span class="rank-number">#${player.leaderboardRank}</span></div>
                <img class="player-avatar" src="${playerCardImgSrc}" alt="Player Avatar">
            </div>
            <div class="player-info">
                <h2 class="player-name">${player.IsAnonymized ? 'Anonymous' : player.gameName}<span class="player-tag">${player.IsAnonymized ? '' : '#'}${player.tagLine}</span></h2>
                <div class="social-icons">
                    <!-- Social icons can be added here -->
                </div>
            </div>
            <div class="player-stats">
                <span class="rating">${player.rankedRating}rr</span>
                <span class="number-of-wins">${player.numberOfWins}w</span>
                <img class="rank-img" src="${rankImgSrc}" alt="Rank">
            </div>
        </div>
    `);

    if (!player.IsAnonymized) {
        card.click(() => window.location.hash = `/profile/${player.gameName}#${player.tagLine}`)
    }

    

    return card;
}

export default { render, renderQuery }