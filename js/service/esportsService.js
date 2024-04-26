import getVerified from "../utilities/getVerified.js";

async function get(league) {
    return (await getVerified('esports', `https://api.henrikdev.xyz/valorant/v1/esports/schedule${league === '' ? '' : '?league='+league}`)).data;
}

export default { get }