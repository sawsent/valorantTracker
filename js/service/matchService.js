async function get(matchId) {

    if (!matchId) {
        matchId = '696848f3-f16f-45bf-af13-e2192f81a600';
    }

    const data = (await getVerified('match', `https://api.henrikdev.xyz/valorant/v2/match/${matchId}`)).data;
    return data;

}

async function getVerified(location, url) {
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.status && responseJson.status != '200') {
        throw {
            location,
            responseJson,
        }
    }
    return responseJson
}

export default { get }