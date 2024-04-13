function get(profile, mmr) {
    return {
        username: profile.name,
        tag: profile.tag,

        rankName: mmr[0].currenttierpatched,
        rankValue: mmr[0].ranking_in_tier,

        bannerURL: profile.card.small,
        rankURL: mmr[0].images.large,

        level: profile.account_level,
        historyData: historyData(mmr),
    }
}

function historyData(mmr) {
    const rev = mmr.toReversed();
    const values = [];
    const labels = [];

    rev.forEach(function(match) {
        values.push(match.ranking_in_tier)
        labels.push(getLabel(match.map.name, match.mmr_change_to_last_game))
    })

    function getLabel(map, change) {
        return `${map}: ${change < 0 ? change : '+' + change}`
    }

    return {
        values,
        labels,
    }
}



export default { get }