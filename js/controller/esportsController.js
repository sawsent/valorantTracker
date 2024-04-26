import esportsView from '/js/view/esportsView.js';
import esportsService from '../service/esportsService.js';
import errorView from '../view/errorView.js';

async function init(args) {
    const league = args.length != 0 ? args[0] : '';
    try {
        const data = await esportsService.get(league);
        console.log(data);
        esportsView.render(data);
    } catch (err) {
        errorView.render(err);
    }
    
    
};

export default { init };