import homeView from '/js/view/homeView.js';
import errorView from '/js/view/errorView.js'
import leaderboardService from '../service/leaderboardService.js';

async function init() {

    try {

        const data = {
            eu: (await leaderboardService.get('eu'))[0],
            na: (await leaderboardService.get('na'))[0],
            ap: (await leaderboardService.get('ap'))[0],
        }
        homeView.render(data);

    } catch (err) {
        errorView.render(err);
    }
 
};

export default { init };