import homeViewv2 from '/js/view/homeViewv2.js';
import profileServicev2 from '/js/service/profileServicev2.js';

async function init() {
    try {
        const response = await profileServicev2.get('sawsent', 'washd');
        homeViewv2.render(response.profile, response.matches);
    } catch (err) {
        console.log(err);
    }

};



export default { init };