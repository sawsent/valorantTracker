import homeView from '/js/view/homeView.js';
import errorView from '/js/view/errorView.js'
import homeService from '../service/homeService.js';

async function init() {

    try {

        const data = await homeService.get();
        homeView.render(data);

    } catch (err) {
        errorView.render(err);
    }
 
};

export default { init };