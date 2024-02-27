import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import "./static/base.css"
import "./static/Icon/iconfont.css"
import Message from "./utils/Message";
import Request from "./utils/Request";
import Utils from "./utils/Utils";
import * as pinia from 'pinia'
import NavBar from "./pages/components/common/NavBar.vue"
import DataList from "./pages/components/common/DataList.vue"
import Popup from "./pages/components/common/Popup.vue"
export function createApp() {
	const app = createSSRApp(App);
	app.use(pinia.createPinia())
	app.component("NavBar",NavBar)
	app.component("DataList",DataList)
	app.component("Popup",Popup)
	app.config.globalProperties.Message=Message
	app.config.globalProperties.Request=Request
	app.config.globalProperties.Utils=Utils
	return {
		app,
	};
}
