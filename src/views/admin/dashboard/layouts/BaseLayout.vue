<template>
  <div>
    <section>
      <button @click="toggleSidebar" type="button"
              class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
          </path>
        </svg>
      </button>
      <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform" :class="sidebarComputed">
        <div class="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <a href="#" class="flex items-center pl-2.5 mb-5">
            <img src="../../../../../public/img/logo.webp" class="h-5 mr-3 sm:h-7" alt="Ujian Logo"/>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sistem Ujian</span>
          </a>
          <button @click="toggleSidebar" type="button"
                  class="sm:invisible text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close menu</span>
          </button>
          <ul>
            <li>
              <router-link
                  :to="{ name: 'Dashboard Admin' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dashboard === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <!-- <svg
                    class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"/>
                </svg> -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                </svg>
                <span class="ml-3">Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link
                  :to="{ name: 'Data Soal' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dataSoal === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Data Soal</span>
              </router-link>
            </li>
            <li>
              <router-link
                  :to="{ name: 'Data Jurusan' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dataJurusan === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Data Jurusan</span>
              </router-link>
            </li>
            <li>
              <router-link
                  :to="{ name: 'Data Kelas' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dataKelas === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Data Kelas</span>
              </router-link>
            </li>
            <li>
              <router-link
                  :to="{ name: 'Data Siswa' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dataSiswa === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700': ''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Data Siswa</span>
              </router-link>
            </li>
            <li>
              <router-link
                  :to="{ name: 'Data Pengguna' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.dataPengguna === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Data Pengguna</span>
              </router-link>
            </li>
          </ul>
          <ul class="pt-4 mt-4 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <router-link
                  :to="{ name: 'Profil Pengguna' }"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  :class="this.sidebarStatus.profilPengguna === true ? 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700':''">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Profil Pengguna</span>
              </router-link>
            </li>
            <router-link
                to=""
                class="flex items-center mt-2 p-2 text-gray-900 rounded-lg bg-red-400 dark:text-white hover:bg-red-500 dark:hover:bg-red-500 group">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Keluar</span>
            </router-link>
          </ul>
        </div>
      </aside>
      <main class="p-4 sm:ml-64">
        <slot name="content"></slot>
      </main>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      URL: import.meta.env.VITE_API_URL,
      isSideBarOpen: false,
      sidebarStatus: {
        dashboard: false,
        dataSoal: false,
        dataJurusan: false,
        dataKelas: false,
        dataSiswa: false,
        dataPengguna: false,
        profilPengguna: false,
      }
    }
  },
  props: {
    dataFromContent: {
      type: Object
    }
  },
  mounted() {
    this.initAuth();
    console.log(this.dataFromContent.sidebar);
    this.sidebarActive();
  },
  computed: {
    sidebarComputed() {
      return this.isSideBarOpen ? '' : '-translate-x-full sm:translate-x-0';
    },
    activeNavigationComputed() {

    }
  },
  methods: {
    initAuth() {
      const token = localStorage.getItem('token_auth');
      if (token == null) {
        this.$router.push({name: 'Landing'});
      } else {
        axios.get(this.URL + 'check_auth', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
            .then(({data}) => {
              if (data.success === true) {
                console.log({status: 'Auth Valid'});
              }
            })
            .catch(({response}) => {
              if (response.status === 401) {
                this.$router.push({name: 'Landing'});
              }
            });
      }
    },
    toggleSidebar() {
      this.isSideBarOpen = !this.isSideBarOpen
    },
    sidebarActive() {
      if (this.dataFromContent.sidebar === 'dashboard') {
        this.sidebarStatus.dashboard = true;
      } else if (this.dataFromContent.sidebar === 'dataSoal') {
        this.sidebarStatus.dataSoal = true;
      } else if (this.dataFromContent.sidebar === 'dataJurusan') {
        this.sidebarStatus.dataJurusan = true;
      } else if (this.dataFromContent.sidebar === 'dataKelas') {
        this.sidebarStatus.dataKelas = true;
      } else if (this.dataFromContent.sidebar === 'dataSiswa') {
        this.sidebarStatus.dataSiswa = true;
      } else if (this.dataFromContent.sidebar === 'dataPengguna') {
        this.sidebarStatus.dataPengguna = true;
      } else if (this.dataFromContent.sidebar === 'profilPengguna') {
        this.sidebarStatus.profilPengguna = true;
      }
    }
  }
}
</script>