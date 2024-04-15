import profileView from '/js/view/profileView.js';
import errorView from '/js/view/errorView.js'
import profileService from '/js/service/profileService.js';

async function init(...args) {
    try {
    
        if (!args[0]) {
            profileView.renderQuery();
            return;
        }

        let username, tag;
        [username, tag] = args[0][0].split('#')

        const data = await profileService.get(username, tag);
        profileView.render(data);
        
    } catch (err) {
        errorView.render(err);
    }
};

export default { init };