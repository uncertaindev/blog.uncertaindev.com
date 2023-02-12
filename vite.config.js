import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import Components from "unplugin-vue-components/vite";


export default defineConfig({
	appType: "mpa",
	server: {
		port: 1337,
		strictPort: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
	},
	plugins: [
		vue(),
		Components(),
	]
});
