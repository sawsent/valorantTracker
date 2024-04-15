import matchView from '/js/view/matchView.js';
import matchService from '../service/matchService.js';
import errorView from '/js/view/errorView.js';

async function init(args) {
    try {

        const profileInfo = args[0].split('#');
        const matchId = args[1];
        const pov = {
            name: profileInfo[0],
            tag: profileInfo[1],
        }
        console.log(matchId);

        const data = await matchService.get(matchId);
        matchView.render(data, pov);
    } catch (err) {
        errorView.render(err)
    }
    
};

export default { init };