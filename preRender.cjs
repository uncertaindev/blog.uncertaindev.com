const vuePrerender = require("vue-prerender");
const options = {
	logLevel: 3,
	parseRouter: true,
	tidy: true
};

vuePrerender("dist", options);
