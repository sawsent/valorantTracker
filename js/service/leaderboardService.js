import getVerified from "../utilities/getVerified.js";

async function get(region) {
    return await getVerified(region + ' Leaderboard', `https://api.henrikdev.xyz/valorant/v1/leaderboard/${region}`);
}

export default { get }