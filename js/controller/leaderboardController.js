import leaderboardView from '/js/view/leaderboardView.js';
import leaderboardService from '../service/leaderboardService.js';
import errorView from '/js/view/errorView.js';

async function init(region) {

    try {
        if (!region) {
            leaderboardView.renderQuery();
            return;
        }
    
        const leaderboard = await leaderboardService.get(convert(region));
    
        leaderboardView.render(leaderboard, region);
    } catch (err) {
        errorView.render(err);
    }
   
};

function convert(region) {
    const availableRegions = ['eu', 'na', 'ap'];
    if (region === 'apac') {
        return 'ap';
    }
    if (availableRegions.includes(region)) {
        return region;
    }
    window.location.hash = '/leaderboard'
    return 'eu';
}

export default { init };