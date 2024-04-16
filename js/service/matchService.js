import getVerified from "../utilities/getVerified.js";

async function get(matchId) {
    return (await getVerified('match', `https://api.henrikdev.xyz/valorant/v2/match/${matchId}`)).data;
}


export default { get }