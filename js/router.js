import routes from '/js/routes.js'

function setCurrentRoute({ path, controller }) {

	routes.currentPath.path = path;
	routes.currentPath.controller = controller;

}

async function launchController(controllerName, args) {
	console.log("this is controller " + controllerName);

	const module = await import(`./controller/${controllerName}.js`);
	console.log(module);
	module.default.init(args);
}

function navigate(path) {

	if (path === routes.currentPath.path) {
		return;
	}

	const pathKey = path.split('/')[1];

	console.log("this is path: " + path);
	console.log("this is path key: " + pathKey);

	const route = routes[pathKey] || routes.home;

	setCurrentRoute(route);
	launchController(route.controller, path.split('/').slice(2));

}



function getPath(urlStr) {
	return new URL(urlStr).hash.slice(1);
}

function navigateOnHashChange() {
	window.addEventListener('hashchange', (e) => {
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
