import { createApp } from "vue";
import "./bootstrap";
import App from "./App.vue";
import router from "./vue/routes";
import i18n from "./vue/i18n";

const app = createApp(App);

app.use(router);
app.use(i18n);
app.mount("#app");
