import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import "./static/base.css"
import "./static/Icon/iconfont.css"
import Message from "./utils/Message";
import Request from "./utils/Request";
import * as pinia from 'pinia'
import Navbar from "./pages/components/common/NavBar.vue"
export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia.createPinia())
	app.component("Navbar",Navbar)
	app.config.globalProperties.Message=Message
	app.config.globalProperties.Request=Request
	return {
		app,
	};
}
