let data = [];
let nameToObject = {};

function get() {
    return data;
}

function getByName(name) {
    return nameToObject[name];
}

function init(maps) {
    data = maps;
    maps.forEach(map => {
        nameToObject[map.displayName] = map;
    });
}

export default { get, getByName, init }