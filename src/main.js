import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import * as pinia from 'pinia'
export function createApp() {
	const app = createSSRApp(App);
	 app.use(pinia.createPinia())
	return {
		app,
	};
}
