import matchFormatter from "./formatter/matchFormatter.js";
import profileBannerFormatter from "./formatter/profileBannerFormatter.js";

var rawMatchData;
var matchesContainerElement;

function toggleVisibility(id) {
    var element = document.getElementById(id);
    var parentDiv = element.previousElementSibling;  // This targets the .filter-label div
    parentDiv.parentNode.classList.toggle('expanded');  // Toggle the .expanded class on the .filter-group
}

function render(data) {

    const { profile, matches, mmr, filterables } = data;
    rawMatchData = matches;
    console.log(rawMatchData)

    console.log(filterables);

    $('#variable').attr("href", "./css/profile.css");

    const main = $('#main');
    main.empty();

    const matchHistory = $('<div id="content"></div>');

    const matchesContainer = $('<div class="row" id="matches-container"></div>').appendTo($('<div class="col-md-9"></div>'));
    matchesContainerElement = matchesContainer;
    matches.forEach(match => {
        const matchCard = createMatchCard(matchFormatter.get(match));
        matchCard.click(() => window.location.hash = `/match/${profile.name}#${profile.tag}/${match.meta.id}`);
        matchesContainer.append(matchCard);
    });

    const filterForm = createFilteringForm(filterables.agents.map(agent => agent.displayName), filterables.maps.map(map => map.displayName));

    matchHistory.append(filterForm);
    matchHistory.append(matchesContainer);

    main.append(createProfileBanner(profileBannerFormatter.get(profile, mmr)))
    main.append(matchHistory);


    populateGraph(profileBannerFormatter.get(profile, mmr).historyData);
    activateFilterForm();
}

function activateFilterForm() {
    $('.filter-label').click(function() {
        $(this).parent().toggleClass('active');
    });

    $('#filter-form').submit(onFilterClick);
    
    $('#agents-btn').click(function() {
        toggleVisibility('agents-options');
    });
    $('#maps-btn').click(function() {
        toggleVisibility('maps-options');
    });
    $('#winloss-btn').click(function() {
        toggleVisibility('winloss-options');
    });
}

function onFilterClick(e) {
    e.preventDefault();  // Prevent the default form submission

    let checkedOptions = {};

    $('.filter-group').each(function() {
        let groupName = $(this).find('.filter-options input:checkbox').attr('name');
        checkedOptions[groupName] = [];
        $(this).find('.filter-options input:checked').each(function() {
            checkedOptions[groupName].push($(this).val());
        });
    });

    console.log(checkedOptions);
    populateMatchContainer(checkedOptions);
    return false;  // Optional: return false to further prevent default form submission
}

function populateMatchContainer(filters) {
    
    let matchesToRender = rawMatchData.slice();

    if (filters.maps.length !== 0) {
        matchesToRender = matchesToRender.filter(match => filters.maps.includes(match.meta.map.name.toLowerCase()));
    }
    if (filters.agents.length !== 0) {
        matchesToRender = matchesToRender.filter(match => filters.agents.includes(match.stats.character.name.toLowerCase()));
    }
    if (filters.winloss.length !== 0) {
        matchesToRender = matchesToRender.filter(match => filters.winloss.includes(match.meta.result.toLowerCase()));
    }
    matchesContainerElement.empty();
    matchesToRender.forEach(match => {
        matchesContainerElement.append(createMatchCard(matchFormatter.get(match)));
    });

}

function createFilteringForm(agents, maps) {
    
    const formContainer = $('<div>', { id: 'filter-form-container' });
    const formHeader = $('<div>', { id: 'filter-form-label' }).text('Filters: ')
    const form = $('<form>', { id: 'filter-form' });
    formContainer.append(formHeader).append(form);

    function createFilterGroup(id, title, items) {
        const filterGroup = $('<div>', { class: 'filter-group', id: id + '-filter' });
        const label = $('<div>', {
            id: id + '-btn',
            class: 'filter-label toggle',
            html: title + ' <span class="arrow">&#9662;</span>'
        });

        const optionsDiv = $('<div>', { class: 'filter-options', id: id + '-options' });

        $.each(items, function (index, item) {
            const label = $('<label>');
            const checkbox = $('<input>', { type: 'checkbox', name: id, value: item.toLowerCase().replace(/\s+/g, '') });
            label.append(checkbox);
            label.append(' ' + item);
            optionsDiv.append(label);
        });

        filterGroup.append(label).append(optionsDiv);
        return filterGroup;
    }

    const agentsFilter = createFilterGroup('agents', 'Agents', agents);
    const mapsFilter = createFilterGroup('maps', 'Maps', maps);
    const winLossFilter = createFilterGroup('winloss', 'Win/Loss', ['Win', 'Loss', 'Tie']);

    form.append(mapsFilter).append(agentsFilter).append(winLossFilter);


    const submitButton = $('<button>', { type: 'submit', text: 'Apply Filters' });
    form.append(submitButton);

    return formContainer;
}





function createProfileBanner(formatter) {
    const { username, tag, rankName, rankValue, level, bannerURL, rankURL, historyData } = formatter;
    // Template literal with dynamic values based on function parameters
    const bannerHTML = $(`
        <div class="banner">
            <img id="banner-image" src="${bannerURL}" alt="Valorant">
            <div class="profile-info">
                <h1 class="username">${username} <span class="tag">#${tag}</span></h1>
                <div class="rankAndLvl">
                    <div class="rank">
                        <img src="${rankURL}" alt="Rank">
                        <div class="text">
                            <span id="name">${rankName}</span>
                            <span id="value">${rankValue}<small>rr</small></span>
                        </div>
                    </div>
                    <div class="account-level">
                        <span class="level">Level</span>
                        <span class="value">${level}</span>
                    </div>
                </div>
            </div>
            
        </div>
    `);

    const graphContainer = $(`<div class="graph-container"></div>`)
    const graph = $(`<canvas id="rankGraph"></canvas>`)
    console.log(graph)

    graphContainer.append(graph);
    bannerHTML.append(graphContainer);

    return bannerHTML;
}

function populateGraph(data) {
    const ctx = document.getElementById('rankGraph');
    new Chart(ctx, {
        type: 'line',  // Defines the type of chart we want to create
        data: {
            labels: data.labels,  // Create labels from 1 to 20
            datasets: [{
                label: 'RR',
                backgroundColor: '#700000',  // Color of the dots
                borderColor: '#700000',  // Color of the line
                data: data.values,  // Our rank changes data
                fill: false,
                pointBorderWidth: 3,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: true,
                    beginAtZero: false  // Y-axis doesn't necessarily start at 0
                },
                x: {
                    display: false
                },
            },
            plugins: {
                legend: {
                    display: false  // Optional: whether to display the legend (true by default)
                }
            }
        }

    });
}


function createProfileCard(profile) {
    const card = $('<div id="profileCard" class="card mx-auto my-5 shadow"></div>');
    const cardBodyTop = $('<div class="card-body text-center"></div>');

    const name = $('<h5 class="card-title"></h5>').text(`${profile.name} #${profile.tag}`);
    const region = $('<p class="card-text text-muted"></p>').text(`Region: ${profile.region}`);
    const accountLevel = $('<p id="accountLevel" class="card-text"></p>').text(`Account Level: ${profile.account_level}`);

    const img = $('<img>', {
        src: profile.card.small,
        alt: "Profile Card",
        class: "card-img-bottom",
        css: { borderRadius: "15px", objectFit: "cover" }
    });
    card.append(img);
    cardBodyTop.append(name, region, accountLevel);
    card.append(cardBodyTop);


    return card;
}



function createMatchCard(formatter) {
    const { mapLogoURL, date, gameScore, agentImgURL, characterName, acs, stats, bg_color } = formatter;

    const matchCard = $(`
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
    `);

    return matchCard;
}

function renderQuery() {
    $('#variable').attr("href", "./css/home.css");
    const root = $('#main');
    root.empty();
    root.append($('<h1 style="margin=100px">PROFILE QUERY VIEW</h1>'))
}

function error(error) {
    const root = $('#main');
    root.append($('<p style="margin=100px"></p>').text(JSON.stringify(error)))
}

export default { render, renderQuery, error };