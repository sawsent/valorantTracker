async function render(profile, matches) {
    const root = $('#content');  // Assuming there's a div with id="content" in your HTML
    $('#variable').attr("href", "./css/home.css");

    // Clear the container before appending new content
    root.empty();

    // Create card element with modern styling
    const card = $('<div class="card mx-auto my-5 shadow" style="position: sticky; top: 40px; width: 20rem;"></div>');
    const cardBodyTop = $('<div class="card-body text-center"></div>');

    // Text elements for the profile
    const name = $('<h5 class="card-title"></h5>').text(`${profile.name} #${profile.tag}`);
    const region = $('<p class="card-text text-muted"></p>').text(`Region: ${profile.region}`);
    const accountLevel = $('<p class="card-text"></p>').text(`Account Level: ${profile.account_level}`).css({
        padding: '3px 6px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        display: 'inline-block'
    });

    // Append text elements to the top card body
    cardBodyTop.append(name, region, accountLevel);
    card.append(cardBodyTop);

    // Image with rounded corners
    const img = $('<img>', {
        src: profile.card.large,
        alt: "Profile Card",
        class: "card-img-top",
        css: { borderRadius: "15px", objectFit: "cover" }
    });
    card.append(img);

    // Append the card to the root container
    root.append(card);

    // Prepare to append matches
    const matchesContainer = $('<div class="row" id="matches-container"></div>').appendTo($('<div class="col-md-9"></div>').appendTo(root));

    // Dynamically import the match formatting module
    const formatter = await import("./matchFormatter.js");
    console.log(formatter)
    matches.forEach(match => {
        matchesContainer.append(createMatchCard(formatter.default.get(match)));
    });
}


function createMatchCard(formatter ,match) {
    const { mapLogoURL, date, gameScore, agentImgURL, characterName, acs, stats, bg_color } = formatter;

    const matchCardHTML = `
    <div class="matchCard" style="background-color: ${bg_color}">
        <img class="mapLogo" src="${mapLogoURL}">
        <div class="gameStats">
            <div class="date">${date}</div>
            <div class="gameScore">${gameScore}</div>
        </div>
        <div class="playerStats">
            <img class="agentImg" src="${agentImgURL}">
            <div class="info">
                <div class="character">${characterName}</div>
                <div class="acs">${acs}</div>
            </div>
            <div class="stats">${stats}</div>
        </div>
    </div>
    `;

    return matchCardHTML;
}

function error(response, code, error) {

}

export default { render };