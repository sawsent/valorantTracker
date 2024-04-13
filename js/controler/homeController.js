import homeView from '/js/view/home/homeView.js';
import profileService from '/js/service/profileService.js';

async function init() {
    try {
        const response = await profileService.get('powerranger', 'httyd');
        homeView.render(response.profile, response.matches);
    } catch (err) {
        console.log(err);
    }

};



export default { init };