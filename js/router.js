import routes from '/js/routes.js'

function setCurrentRoute({ path, controller }) {

	routes.currentPath.path = path;
	routes.currentPath.controller = controller;

}

async function launchController(controllerName, args) {

	const module = await import(`./controller/${controllerName}.js`);
	module.default.init(args);
}

function navigate(path) {

	if (path === routes.currentPath.path) {
		return;
	}


	if (path.startsWith('/profile')) {
		handleProfileNavigation(path);
		return;
	}

	if (path.startsWith('/leaderboard')) {
		handleLeaderboardNavigation(path);
		return;
	}

	const routeKey = Object.keys(routes).find(key => routes[key].path === path);
	const route = routes[routeKey] || routes.home;

	setCurrentRoute(route);
	launchController(route.controller)

}

function handleLeaderboardNavigation(path) {
	const routeKey = Object.keys(routes).find(key => routes[key].path === '/leaderboard');
	const route = routes[routeKey] || routes.home;

	const splitPath = path.split('/')

	let region = splitPath[2];

	launchController(route.controller, region)

}

function handleProfileNavigation(path) {
	const routeKey = Object.keys(routes).find(key => routes[key].path === '/profile');
	const route = routes[routeKey] || routes.home;

	const splitPath = path.split('/')
	
	if (splitPath.length < 3) {
		launchController(routes.home.controller);
		return;
	}

	let args = [splitPath[2], splitPath[3]];

	launchController(route.controller, args)

}

function getPath(urlStr) {
	return new URL(urlStr).hash.slice(1);
}

function navigateOnHashChange() {
	addEventListener('hashchange', (e) => {
		const path = getPath(e.newURL);
		navigate(path);
	})
}

function init() {

	window.location.hash = window.location.hash || routes.home.path;

	navigate(getPath(window.location.href));
	navigateOnHashChange();
}

export default { init };
