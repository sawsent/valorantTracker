import profileView from '/js/view/profileView.js';
import profileService from '/js/service/profileService.js';

async function init(...args) {
    try {
        console.log(args);
        if (!args[0]) {
            profileView.renderQuery();
            return;
        }

        let username, tag;
        [username, tag] = args[0][0].split('#')
        console.log(username, '#', tag)

        const data = await profileService.get(username, tag);
        profileView.render(data);
        
    } catch (err) {
        profileView.error(err);
    }
};

export default { init };