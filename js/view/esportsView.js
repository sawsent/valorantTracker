function render(data) {
    $('#variable').attr("href", "./css/esports.css");
    const main = $('#main');

    main.empty();

    const container = $(`<div id="match-container">`).appendTo(main);

    data.forEach(match => {
        container.append(createCard(match));
    });

}

function createCard(match) {

    const matchCard = $(`<div class="match-card ${match.state}">`);

    const leagueAndDate = $('<div class="state-date">').appendTo(matchCard);

    const league = $('<div class="league">').appendTo(leagueAndDate);
    league.click(() => {
        window.location.hash = `/esports/${match.league.identifier}`
    })
    const leagueLogo = $(`<img class="league-logo" src=${match.league.icon}>`).appendTo(league);
    const leagueName = $(`<span class="league-name">`).text(match.league.name).appendTo(league);

    if (match.state === 'inProgress') {
        const live = $(`<div class="live-container">`).appendTo(leagueAndDate);

        const red = $(`<div class="red-circle">`).appendTo(live);
        const liveText = $(`<div class="live-text">`).text('Live').appendTo(live);

    }

    const date = getFormattedDate(match.date).appendTo(leagueAndDate)

    const details = $('<div class="details">').appendTo(matchCard);

    

    const teams = $('<div class="teams">').appendTo(details);

    const left = createTeamCard(match.match.teams[0], 'left').appendTo(teams);

    const score = createScore(match).appendTo(teams);

    const right = createTeamCard(match.match.teams[1], 'right').appendTo(teams);



    return matchCard;

    function createTeamCard(team, className) {
        const container = $(`<div class="team ${className} ${team.has_won ? 'winner' : ''}">`);

        const textContainer = $(`<div class="team-text-container">`);
    
        const name = $(`<span class="team-name">`).text(team.name).appendTo(textContainer);
        const code = $(`<span class="team-code">`).text(team.code).appendTo(textContainer);

        const img = $(`<img class="team-icon" src=${team.icon}>`);

        if (className === 'left') {
            container.append(textContainer).append(img);
        } else {
            container.append(img).append(textContainer);
        }

        return container;
    }

    function createScore(match) {
        const container = $(`<div class="score-container">`);
        
        const score = $(`<span class="score-numbers">`).html(`${match.match.teams[0].game_wins}&nbsp<small>:</small>&nbsp${match.match.teams[1].game_wins}`);
        const text = $(`<span class="game-format">`).text(`BO${match.match.game_type.count}`);
        container.append(score).append(text);

        return container;
    }

    function getFormattedDate(dateString) {
        const date = new Date(dateString);

        const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };

        const formattedDate = date.toLocaleDateString('en-US', optionsDate);
        const formattedTime = date.toLocaleTimeString('en-US', optionsTime);

        const dateDiv = $(`<div class="date-time">${formattedDate}<br>${formattedTime}</div>`)

        return dateDiv;
    }
}

export default { render }