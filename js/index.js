import router from '/js/router.js';
import maps from '/js/data/maps.js';
import agents from '/js/data/agents.js';
import getVerified from '/js/utilities/getVerified.js';
import errorView from '/js/view/errorView.js'



$(document).ready(function() {
    router.init()
    $('#navSearch').click(() => window.location.hash = `/profile/${$('#navBarUsername').val()}#${$('#navBarTag').val()}`);
    loadData();
})

async function loadData() {
    
    try {
        let mapData = await getVerified('loadMaps', 'https://valorant-api.com/v1/maps')
        maps.init(mapData.data);
        
        let agentData = await getVerified('loadAgents', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        agents.init(agentData.data);
    } catch (err) {
        errorView.render(err);
    }
    
}

