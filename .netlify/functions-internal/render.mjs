import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.0ad36f1a.js","app":"_app/immutable/entry/app.66a1516d.js","imports":["_app/immutable/entry/start.0ad36f1a.js","_app/immutable/chunks/index.716684d7.js","_app/immutable/chunks/singletons.cbf3e318.js","_app/immutable/entry/app.66a1516d.js","_app/immutable/chunks/index.716684d7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js'),
			() => import('../server/nodes/11.js'),
			() => import('../server/nodes/12.js'),
			() => import('../server/nodes/13.js'),
			() => import('../server/nodes/14.js'),
			() => import('../server/nodes/15.js'),
			() => import('../server/nodes/16.js'),
			() => import('../server/nodes/17.js'),
			() => import('../server/nodes/18.js'),
			() => import('../server/nodes/19.js')
		],
		routes: [
			{
				id: "/ai",
				pattern: /^\/ai\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/hakukoneoptimointi",
				pattern: /^\/hakukoneoptimointi\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/iot",
				pattern: /^\/iot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/it-tuki",
				pattern: /^\/it-tuki\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/it-tuki/yksityisille",
				pattern: /^\/it-tuki\/yksityisille\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/it-tuki/yrityksille",
				pattern: /^\/it-tuki\/yrityksille\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/kiitos",
				pattern: /^\/kiitos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/konsultointi",
				pattern: /^\/konsultointi\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/kyberturvallisuus",
				pattern: /^\/kyberturvallisuus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/kyberturvallisuus/yksityisille",
				pattern: /^\/kyberturvallisuus\/yksityisille\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/kyberturvallisuus/yrityksille",
				pattern: /^\/kyberturvallisuus\/yrityksille\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/mainostus",
				pattern: /^\/mainostus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/meista",
				pattern: /^\/meista\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/tietoturvaseloste",
				pattern: /^\/tietoturvaseloste\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/tiimi",
				pattern: /^\/tiimi\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/urat",
				pattern: /^\/urat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/verkkosivut",
				pattern: /^\/verkkosivut\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
