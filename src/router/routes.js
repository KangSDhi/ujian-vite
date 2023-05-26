import LandingPage from "../views/landing/Index.vue";
import About from "../views/landing/About.vue";
import Login from "../views/landing/auth/Login.vue";
import DashboardAdmin from "../views/admin/dashboard/Index.vue";

const routes = [
    { 
        path: "/", 
        name: "Landing",
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
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login Page"
        }
    },
    {
        path: "/admin/dashboard",
        name: "Dashboard Admin",
        component: DashboardAdmin,
        meta: {
            title: "Dashboard Admin"
        }
    }
];

export default routes;