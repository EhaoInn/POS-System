import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import LoginPage from "../pages/auth/LoginPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
