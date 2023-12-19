<template>
    <!-- nav -->
    <div id="nav" class="hidden md:block border-b-2 top-0 p-3 bg-white w-full z-50">
        <div class="flex justify-between gap-4 my-2 mx-8">
            <div class="flex gap-4">
                <h2 class="self-center text-3xl text-sky-500"><strong>SITASI</strong></h2>
                <div class="self-center ml-9 flex-9">
                    <ul class="flex gap-6 text-default">
                        <li><a href="/" class="hover:text-sky-800">Beranda</a></li>
                        <li class="flex gap-2">
                            <a href="#" class="hover:text-sky-800">Berkas</a>
                        </li>
                        <li><a href="#" class="hover:text-sky-800">Alur</a></li>
                        <li><a href="#" class="hover:text-sky-800">Tugas Akhir</a></li>
                        <li><a href="#" class="hover:text-sky-800">Jadwal Sesi</a></li>
                        <li><a href="#" class="hover:text-sky-800">Seleksi Judul</a></li>
                        <li><a href="/survei/" class="hover:text-sky-800">Survei Pengguna</a></li>
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