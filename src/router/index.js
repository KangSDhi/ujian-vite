import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/landing/Index.vue";
import About from "../views/About.vue";

const routes = [
    { 
        path: "/", 
        name: "Landing Page",
        component: LandingPage,
        meta: {
            title: "Landing Page"
        }
    },
    { 
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "About Page"
        } 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;