import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { initPageLoading } from "./composables/usePageLoading";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/css/animations.css";

initPageLoading(router);

createApp(App).use(router).mount("#app");
