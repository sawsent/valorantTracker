import homeView from '/js/view/homeView.js';
import filmService from '/js/service/filmService.js';

function init() {
  homeView.render(filmService.getFilm);
};

export default { init };
