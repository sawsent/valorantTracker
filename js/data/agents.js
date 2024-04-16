let data = [];
let nameToObject = {};

function get() {
    return data;
}

function getByName(name) {
    return nameToObject[name];
}

function init(agents) {
    data = agents;
    agents.forEach(map => {
        nameToObject[map.displayName] = map;
    });
}

export default { get, getByName, init }