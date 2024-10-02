import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import "./mock/index";
import i18n from "./i18n/index";

const app = createApp(App);

app.use(router).use(i18n).use(Antd).mount("#app");
