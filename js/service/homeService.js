import getVerified from "../utilities/getVerified.js";

async function get() {

    const eu = await getVerified('euLeaderboard', `https://api.henrikdev.xyz/valorant/v1/leaderboard/eu`)
    const na = await getVerified('naLeaderboard', `https://api.henrikdev.xyz/valorant/v1/leaderboard/na`)
    const ap = await getVerified('apLeaderboard', `https://api.henrikdev.xyz/valorant/v1/leaderboard/ap`)

    return {
        eu: eu[0],
        ap: ap[0],
        na: na[0]
    }
}

export default { get }