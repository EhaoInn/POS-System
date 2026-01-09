import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/includes/Navbar.vue";
import Sidebar from "../components/includes/Sidebar.vue";
import Home from "../components/pages/Home.vue";
import LoginPage from "../components/pages/auth/LoginPage.vue";
import Dashboard from "../components/pages/Dashboard.vue";
import Product from "../components/pages/Product.vue";
import User from "../components/user/User.vue";
import UserCreate from "../components/user/UserCreate.vue";

const includes = {
    Navbar: Navbar,
    Sidebar: Sidebar,
};

const routes = [
    {
        path: "/home",
        name: "Home",
        components: {
            default: Home,
            ...includes,
        },
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        components: {
            default: Dashboard,
            ...includes,
        },
    },
    {
        path: "/product",
        name: "Product",
        components: {
            default: Product,
            ...includes,
        },
    },
    {
        path: "/account",
        name: "User",
        components: {
            default: User,
            ...includes,
        },
    },
    {
        path: "/account/create",
        name: "UserCreate",
        components: {
            default: UserCreate,
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
