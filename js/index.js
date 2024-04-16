import router from '/js/router.js';
import agents from './utilities/agents.js';
import maps from './utilities/maps.js';


$(document).ready(function() {
    router.init();
    $('#navSearch').click(() => window.location.hash = `/profile/${$('#username').val()}#${$('#tag').val()}`);
    loadData();
})

async function loadData() {
    let mapsResponse = await fetch(`https://valorant-api.com/v1/maps`)
    mapsResponse = await mapsResponse.json();
    let mapData = mapsResponse.data;
    // let mapData = getVerified('loadMaps', 'https://valorant-api.com/v1/maps')
    maps.init(mapData);

    let agentsResponse = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
    agentsResponse = await agentsResponse.json();
    let agentData = agentsResponse.data;
    // let agentData = getVerified('loadAgents', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true')
    agents.init(agentData);
}

