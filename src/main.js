import { createApp } from "vue";
import "@/assets/css/style.css";
import App from "./App.vue";
import Antd from "ant-design-vue";
import router from "./router";
import "./mock/index";
import i18n from "./i18n/index";
import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';

const app = createApp(App);

const pinia = createPinia();
pinia.use(persist);

app.use(router).use(pinia).use(i18n).use(Antd).mount("#app");
