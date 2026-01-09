import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import LoginPage from "../components/pages/auth/LoginPage.vue";
import Navbar from "../components/includes/Navbar.vue";
import Sidebar from "../components/includes/Sidebar.vue";

const includes = {
    Navbar: Navbar,
    Sidebar: Sidebar,
};

const routes = [
    {
        path: "/",
        name: "Home",
        components: {
            default: Home,
            ...includes,
        },
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
