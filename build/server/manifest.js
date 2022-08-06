export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-1d406f6d.js","imports":["_app/immutable/start-1d406f6d.js","_app/immutable/chunks/index-03969575.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "[...allRoutes]",
				pattern: /^(?:\/(.*))?\/?$/,
				names: ["allRoutes"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
