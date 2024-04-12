import homeView from '/js/view/homeView.js';
import profileService from '/js/service/profileService.js';

function init() {
    profileService.getProfile('SEN tarik', '1337', homeView.render, homeView.error);
};

export default { init };