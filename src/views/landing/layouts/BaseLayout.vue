<template>
    <div>
        <header>
            <nav
                class="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div>
                    <div class="container mx-auto flex items-center justify-between text-gray-900">
                        <router-link :to="{ name: 'Landing' }"
                            class="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                            <span>Aplikasi Ujian</span>
                        </router-link>
                        <ul class="hidden items-center gap-6 lg:flex">
                            <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <!-- <a class="flex items-center" href="#">
                                    Beranda
                                </a> -->
                                <router-link :to="{ name: 'Landing' }" class="flex items-center">
                                    Beranda
                                </router-link>
                            </li>
                            <li class="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                                <!-- <a class="flex items-center" href="#">
                                    Tentang
                                </a> -->
                                <router-link :to="{ name: 'About' }" class="flex items-center">
                                    Tentang
                                </router-link>
                            </li>
                        </ul>
                        <button @click="$router.push({ name: 'Login' })"
                            class="middle none center hidden rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                            type="button" data-ripple-light="true">
                            <span>Masuk</span>
                        </button>
                        <button @click="isMenuOpen = !isMenuOpen"
                            class="middle none relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden">
                            <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                <svg v-show="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg v-show="isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="lg:hidden">
                        <div class="container mx-auto pb-2">
                            <ul class="mt-2 mb-4 flex flex-col gap-2">
                                <li class="p-1 font-sans text-sm text-black font-normal leading-normal">
                                    <router-link :to="{ name: 'Landing' }" class="flex items-center">
                                        Beranda
                                    </router-link>
                                </li>
                                <li class="p-1 font-sans text-sm text-black font-normal leading-normal">
                                    <router-link :to="{ name: 'About' }" class="flex items-center">
                                        Tentang
                                    </router-link>
                                </li>
                            </ul>
                            <button @click="$router.push({ name: 'Login' })"
                                class="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button" data-ripple-light="true">
                                <span>Masuk</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <section>
            <main class="mx-auto max-w-screen-md py-12">
                <slot name="content"></slot>
            </main>
            <aside></aside>
        </section>
        <footer></footer>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            isMenuOpen: false,
            URL: import.meta.env.VITE_API_URL,
        }
    },
    mounted() {
        this.initAuth();
    },
    methods: {
        initAuth() {
            const token = localStorage.getItem('token_auth');

            if (token != null) {
                axios.get(this.URL + 'check_auth', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                    .then(({ data }) => {
                        if (data.success == true) {
                            switch (data.data.role) {
                                case "Admin":
                                    this.$router.push({ name: 'Dashboard Admin' });
                                    break;
                                case "Guru":
                                    console.log("Guru");
                                    break;
                                case "Siswa":
                                    console.log("Siswa");
                                    break;
                                default:
                                    console.error("Unknown");
                                    break;
                            }
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
            // axios.post(this.URL + '')
        }
    }
}
</script>