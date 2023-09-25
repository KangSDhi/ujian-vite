import LandingPage from "../views/landing/Index.vue";
import About from "../views/landing/About.vue";
import Login from "../views/landing/auth/Login.vue";
import DashboardAdmin from "../views/admin/dashboard/Index.vue";
import DataPengguna from "../views/admin/dashboard/DataPengguna.vue";
import DataSoal from "../views/admin/dashboard/DataSoal.vue";
import DataJurusan from "../views/admin/dashboard/DataJurusan.vue";
import DataKelas from "../views/admin/dashboard/DataKelas.vue";
import DataSiswa from "../views/admin/dashboard/DataSiswa.vue";
import ProfilPengguna from "../views/admin/dashboard/ProfilPengguna.vue";

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
        path: "/admin/",
        children: [
            {
                path: "dashboard",
                name: "Dashboard Admin",
                component: DashboardAdmin,
                meta: {
                    title: "Dashboard Admin"
                }
            },
            {
                path: "data-soal",
                name: "Data Soal",
                component: DataSoal,
                meta: {
                    title: "Data Soal"
                }
            },
            {
                path: "data-jurusan",
                name: "Data Jurusan",
                component: DataJurusan,
                meta: {
                    title: "Data Jurusan"
                }
            },
            {
                path: "data-kelas",
                name: "Data Kelas",
                component: DataKelas,
                meta: {
                    title: "Data Kelas"
                }
            },
            {
                path: "data-siswa",
                name: "Data Siswa",
                component: DataSiswa,
                meta: {
                    title: "Data Siswa"
                }
            },
            {
                path: "data-pengguna",
                name: "Data Pengguna",
                component: DataPengguna,
                meta: {
                    title: "Data Pengguna"
                }
            },
            {
                path: "profil-pengguna",
                name: "Profil Pengguna",
                component: ProfilPengguna,
                meta: {
                    title: "Profil Pengguna"
                }
            }
        ]
    },
];

export default routes;