<template>
    <div>
        <!-- Navbar for desktop -->
        <div id="nav" class="hidden md:block border-b-2 top-0 p-3 bg-white w-full z-50">
            <div class="flex justify-between gap-4 my-2 mx-8">
                <div class="flex gap-4">
                    <h2 class="self-center text-3xl text-sky-500"><strong>SITASI</strong></h2>
                    <div class="self-center ml-9 flex-9">
                        <ul class="flex gap-6 text-default">
                            <li><nuxt-link to="/" class="hover:text-sky-800">Beranda</nuxt-link></li>
                            <li class="flex gap-2">
                                <nuxt-link to="/berkas/" class="hover:text-sky-800">Berkas</nuxt-link>
                            </li>
                            <li><nuxt-link to="/alur/" class="hover:text-sky-800">Alur</nuxt-link></li>
                            <li><nuxt-link to="#" class="hover:text-sky-800">Tugas Akhir</nuxt-link></li>
                            <li><nuxt-link to="/jadwal/" class="hover:text-sky-800">Jadwal Sesi</nuxt-link></li>
                            <li><nuxt-link to="/pengumuman/" class="hover:text-sky-800">Seleksi Judul</nuxt-link></li>
                            <li><nuxt-link to="/survei/" class="hover:text-sky-800">Survei Pengguna</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="self-center text-default hover:text-sky-800">
                        <a href="https://drive.google.com/file/d/1Xz5oxoPB8TMf3ogUlDpi-OxOL_MuETeU/view" target="_blank">
                            <i class="fas fa-book"></i>
                            Panduan Pengguna
                        </a>
                    </div>
                    <div class="self-center">
                        <button @click.prevent="showAction = true"
                            class="border  border-sky-500 text-sky-500 rounded-full px-8 py-2 hover:bg-sky-600 hover:text-white active:bg-sky-800">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navbar for mobile -->
        <div class="md:hidden">
            <!-- Burger button -->
            <div class="flex justify-between items-center p-3 bg-white">
                <h2 class="text-3xl text-sky-500"><strong>SITASI</strong></h2>
                <button @click="toggleMobileMenu" class="text-sky-500 focus:outline-none">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>

            <!-- Mobile sidebar -->
            <div v-if="showMobileMenu" class="bg-white p-4 text-black">
                <!-- Mobile menu items -->
                <div class="text-default">
                    <nuxt-link to="/" class="block py-2 hover:text-sky-800">Beranda</nuxt-link>
                    <div class="flex flex-col gap-2">
                        <nuxt-link to="/berkas/" class="block py-2 hover:text-sky-800">Berkas</nuxt-link>
                    </div>
                    <nuxt-link to="/alur/" class="block py-2 hover:text-sky-800">Alur</nuxt-link>
                    <nuxt-link to="#" class="block py-2 hover:text-sky-800">Tugas Akhir</nuxt-link>
                    <nuxt-link to="/jadwal/" class="block py-2 hover:text-sky-800">Jadwal Sesi</nuxt-link>
                    <nuxt-link to="/pengumuman/" class="block py-2 hover:text-sky-800">Seleksi Judul</nuxt-link>
                    <nuxt-link to="/survei/" class="block py-2 hover:text-sky-800">Survei Pengguna</nuxt-link>
                </div>
            </div>
        </div>

        <!-- <login /> -->
        <login v-if="showAction" @close="showAction = false" />
    </div>
</template>


<script>

export default {
    data() {
        return {
            headerClass: "header",
            showAction: false,
            showMobileMenu: false,
        }
    },
    methods: {
        handleScroll() {
            var scroll = window.scrollY || window.pageYOffset;
            let nav = document.getElementById("nav");
            if (scroll >= 10) {
                this.headerClass = "header-alt";
                nav.classList.add("sticky");
            } else {
                nav.classList.remove("sticky");
            }
        },
        toggleMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
    },
    mounted() {
        // Add scroll event listener when the component is mounted
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        // Remove scroll event listener before the component is destroyed
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>