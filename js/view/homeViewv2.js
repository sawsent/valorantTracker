function render(profile, matches) {

    const root = document.body;

    // Create container div and row structure
    let container = document.createElement('div');
    container.className = 'container mt-4';
    container.id = 'container';

    const row = document.createElement('div');
    row.className = 'row';

    container.appendChild(row);
    root.appendChild(container);

    container = $('#container');
    container.empty();  // Clear the container before appending new content

    // Create card element with modern styling
    const card = $(`<div class="card mx-auto my-5 shadow" style="width: 20rem; border-radius: 15px; overflow: hidden;"></div>`);

    

    // Card body with internal padding and text content
    const cardBodyTop = $('<div class="card-body text-center"></div>');
    const name = $('<h5 class="card-title"></h5>').text(`${profile.name} #${profile.tag}`);
    const region = $('<p class="card-text text-muted"></p>').text(`Region: ${profile.region}`);
    const accountLevel = $('<p class="card-text px-3 py-1" style="border: 1px solid #ddd; border-radius: 10px; display: inline-block;"></p>').text(`Account Level: ${profile.account_level}`);

    // Append text elements to the top card body
    cardBodyTop.append(name);
    cardBodyTop.append(region);
    cardBodyTop.append(accountLevel);
    
    // Image with rounded corners
    const img = $(`<img src="${profile.card.large}" class="card-img-top" alt="Profile Card" style="border-radius: 15px object-fit: cover;">`);

    // Append the top card body and image to the card
    card.append(cardBodyTop);
    card.append(img);

    // Append the card to the container
    container.append(card);

    // Column for Matches
    const matchesColumn = document.createElement('div');
    matchesColumn.className = 'col-md-9';

    const matchesRow = document.createElement('div');
    matchesRow.className = 'row';
    matchesRow.id = 'matches-container';

    matchesColumn.appendChild(matchesRow);
    row.appendChild(matchesColumn);



    // Function to render matches

    const matchesContainer = document.getElementById('matches-container');
    matches.forEach(match => {
        const matchCol = document.createElement('div');
        matchCol.className = 'col-md-4 mb-4';

        const card = document.createElement('div');
        card.className = 'card h-100 shadow';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = `${match.meta.map.name}`;

        const text = document.createElement('p');
        text.className = 'card-text';
        text.innerHTML = `
                <strong>Region:</strong> ${match.meta.region}<br>
                <strong>Started:</strong> ${match.meta.started_at}<br>
                <strong>Scores:</strong> Red: ${match.teams.red}, Blue: ${match.teams.blue}
            `;

        const stats = document.createElement('ul');
        stats.className = 'list-group list-group-flush';
        const kills = document.createElement('li');
        kills.className = 'list-group-item';
        kills.textContent = `Kills: ${match.stats.kills}`;
        const deaths = document.createElement('li');
        deaths.className = 'list-group-item';
        deaths.textContent = `Deaths: ${match.stats.deaths}`;
        const assists = document.createElement('li');
        assists.className = 'list-group-item';
        assists.textContent = `Assists: ${match.stats.assists}`;

        stats.appendChild(kills);
        stats.appendChild(deaths);
        stats.appendChild(assists);

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        card.appendChild(stats);
        matchCol.appendChild(card);

        matchesContainer.appendChild(matchCol);
    });

}

function error(response, code, error) {

}

export default { render };