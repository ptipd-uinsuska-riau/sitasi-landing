<template>
    <div>
        <topbar />
        <!-- section 1 -->
        <div class="bg-slate-100 min-h-screen">
            <div class="w-5/6 mx-auto py-20">
                <div class="md:flex justify-between">
                    <div>
                        <div data-aos="zoom-in">
                            <h1 class="text-center md:text-left text-7xl md:mb-28"><strong>SITASI</strong></h1>
                        </div>
                        <div class="text-center md:text-left text-sm md:text-lg">
                            <div class="my-2" data-aos="fade-up">
                                <p class=""><i
                                        class="fas fa-check border text-sm border-green-500 text-sky-500 rounded-full mr-4 px-1 hidden md:inline-block"></i>
                                    Pengajuan
                                    Tugas
                                    Akhir,
                                    Seminar, Sidang,
                                    Review Proposal</p>
                            </div>
                            <div class="my-2" data-aos="fade-up">
                                <p><i
                                        class="fas fa-check border text-sm border-green-500 text-sky-500 rounded-full mr-4 px-1 hidden md:inline-block"></i>
                                    Statistik
                                    Alumni, Pendataan, Prestasi</p>
                            </div>
                            <div class="my-2" data-aos="fade-up">
                                <p><i
                                        class="fas fa-check border text-sm border-green-500 text-sky-500 rounded-full mr-4 px-1 hidden md:inline-block"></i>
                                    Penilaian,
                                    Arsip, Berkas Tugas Akhir</p>
                            </div>
                        </div>

                        <div class="text-center md:flex items-center mt-10 md:gap-2" data-aos="fade-up">
                            <div class="mb-4 md:mb-0">
                                <button @click.prevent="showAction = true"
                                    class=" w-full md:block border  bg-sky-500 text-white rounded-full px-5 py-2 md:px-10 md:py-4 text-xl hover:bg-sky-600 hover:text-white active:bg-sky-800">
                                    Login
                                </button>
                            </div>
                            <div class="">
                                <a href="/survei/"
                                    class=" border inline-block w-full md:block  border-sky-500 text-sky-500 rounded-full  px-5 py-2 md:px-10 md:py-4 text-xl hover:bg-sky-600 hover:text-white active:bg-sky-800">
                                    Survei Pengguna
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block relative">
                        <div class="w-[350px] h-[400px] rounded-lg bg-slate-300" data-aos="fade-up">
                            <img class="object-cover h-[400px] w-[400px] rounded-lg" src="../public/uin.jpeg" alt="">
                        </div>
                        <div class="absolute top-[17rem] -left-36 z-20" data-aos="fade-up"><i
                                class="bg-gray-500 fas fa-quote-right text-2xl text-white rounded-full py-1 px-2"></i>
                        </div>
                        <div class="bg-gray-50 w-[400px] h-[200px] rounded-lg shadow-xl absolute z-10 top-72 right-20"
                            data-aos="fade-up">
                            <div>
                                <p class="border-b m-4 text-xl text-gray-400 pb-12">Sistem Informasi Pengelolaan Tugas Akhir
                                    Program
                                    Studi
                                    Sistem Informasi
                                </p>
                                <div class="flex p-4 text-gray-400 justify-between">
                                    <div>SITASI</div>
                                    <div><small>Since 2018</small></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:flex justify-between pt-36" data-aos="fade-up">
                    <div>
                        <h1 class="text-sky-400 bg-gray-200 py-2 px-2 rounded-lg text-center"><strong>Sistem informasi
                                terintegrasi</strong>
                        </h1>
                    </div>

                    <div class="flex gap-1 md:gap-2 text-white mt-3 justify-center">
                        <div><strong class="bg-sky-300 py-2 px-2 rounded-lg">iRaise</strong></div>
                        <div> <strong class="bg-sky-300 py-2 px-2 rounded-lg">Alumni</strong></div>
                        <div> <strong class="bg-sky-300 py-2 px-2 rounded-lg">Seminar FST</strong></div>
                    </div>
                </div>

                <!-- slider -->
                <div class="flex justify-between  mt-20" data-aos="fade-up">
                    <div class="font-bold md:text-xl">
                        <h1>Seminar dan Sidang</h1>
                    </div>
                    <div class="self-center text-sky-500 text-sm md:block">
                        <nuxt-link to="/"> Selengkapnya <i class="fas fa-arrow-right ml-2"></i></nuxt-link>
                    </div>
                </div>

                <div class="grid grid-cols-1" data-aos="fade-up">
                    <div class="flex gap-2 mt-4 overflow-x-auto pb-4">
                        <div v-for="(d, i) in seminarSidang.data" :key="i"
                            class="flex-shrink-0 bg-white border rounded-lg p-2">
                            <div class="relative">
                                <div class="flex gap-2 w-full">
                                    <div>
                                        <!-- jika d.avatar !== '' d.avatar else ../public/uin.jpeg -->
                                        <img class="w-10 h-10 rounded-full"
                                            :src="d.avatar !== '' ? d.avatar : '../public/uin.jpeg'" alt="">
                                    </div>
                                    <div class="text-sm pr-28">
                                        <h1 class="inline-block">{{ d.nama }}</h1>
                                        <p>{{ d.nim }}</p>
                                    </div>
                                </div>
                                <div class="absolute top-0 right-0">
                                    <div class="text-sm px-2 py-1 bg-sky-400 rounded-full text-white ">
                                        {{ d.jenis }}
                                    </div>
                                </div>

                            </div>
                            <div class="flex text-sm gap-4 text-gray-500 mt-4 justify-between w-full">
                                <div class="self-center ">
                                    <p class=""> <i class="fas fa-calendar-days text-sky-500 mr-2"></i>{{
                                        useMomentDate(d.tanggal) }}</p>
                                </div>
                                <div class="text-sm px-2 py-1 self-center bg-sky-400 rounded-full text-white">
                                    <i class="fas fa-clock"></i> {{ d.jam }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- section 2 -->
        <div class="bg-gray-50 min-h-screen">
            <div class="w-5/6 mx-auto py-20">
                <div class="hidden md:block bg-sky-200 w-max px-4 py-2 rounded-full text-sky-500 mb-2" data-aos="fade-up">
                    Statistik Alumni
                </div>
                <h1 class="text-4xl md:text-7xl my-4" data-aos="fade-up"><strong>Alumni</strong></h1>
                <div class="border p-4 rounded-xl">
                    <div class="flex py-5 justify-between">
                        <div data-aos="fade-up">
                            <h1 class="text-2xl"><strong>Overview</strong></h1>
                        </div>
                        <div class="bg-sky-500 self-center py-1 px-2 rounded-lg text-white" data-aos="fade-up">
                            2023
                        </div>
                    </div>
                    <div class="md:flex justify-start gap-5 ">
                        <div class="">

                            <div class="bg-violet-100 md:w-[400px] flex justify-between px-4 py-6 rounded-lg mb-4 gap-2 md:gap-4"
                                data-aos="fade-right">
                                <div class="self-center">
                                    <h1 class="mb-2 text-sm">Alumni</h1>
                                    <h1 class="text-3xl mb-4"><strong>{{ alumni.count }}</strong></h1>
                                    <p class="text-sm text-default"><i
                                            class="fas fa-arrow-up text-sm mr-2 text-green-500"></i>
                                        9.5%
                                    </p>
                                </div>
                                <div class="self-center">
                                    <randomchart />
                                </div>
                            </div>

                            <div class="bg-blue-100 md:w-[400px] flex justify-between px-4 py-6 rounded-lg mb-4 gap-2 md:gap-4"
                                data-aos="fade-right">
                                <div class="self-center">
                                    <h1 class="mb-2 text-sm">Alumni Telah isi Kuisioner</h1>
                                    <h1 class="text-3xl mb-4"><strong>72.000</strong></h1>
                                    <p class="text-sm text-default"><i
                                            class="fas fa-arrow-up text-sm mr-2 text-green-500"></i>
                                        25%
                                    </p>
                                </div>
                                <div class="self-center">
                                    <randomchart />
                                </div>
                            </div>

                            <div class="bg-red-100 md:w-[400px] flex justify-between px-4 py-6 rounded-lg gap-2 md:gap-4"
                                data-aos="fade-light">
                                <div class="self-center">
                                    <h1 class="mb-2 text-sm">Pengguna Alumni</h1>
                                    <h1 class="text-3xl mb-4"><strong>72.000</strong></h1>
                                    <p class="text-sm text-default"><i
                                            class="fas fa-arrow-up text-sm mr-2 text-green-500"></i>
                                        25%
                                    </p>
                                </div>
                                <div class="self-center">
                                    <randomchart />
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class=" md:w-[735px] md:h-[475px] bg-gray-200 rounded-lg" data-aos="fade-right">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- section 3 -->
        <div class="bg-slate-100 min-h-screen">
            <div class="w-5/6 mx-auto py-20">
                <h1 class="text-4xl md:text-7xl my-4" data-aos="fade-up"><strong>Fitur</strong></h1>
                <div class="md:flex py-5 justify-between ">
                    <div class="md:w-2/5" data-aos="fade-up">
                        <p class="text-xl text-gray-500">Mengelola tugas akhir dengan mudah dan efisien. Sistem kami
                            memberikan
                            pengalaman
                            tanpa stres untuk mahasiswa dan dosen.</p>
                    </div>
                    <div class="self-center text-xl text-sky-500 pt-3" data-aos="fade-up">
                        <nuxt-link to="/"> Lihat Selengkapnya <i class="fas fa-arrow-right ml-2"></i></nuxt-link>
                    </div>
                </div>

                <div class="md:grid grid-cols-2 gap-4">
                    <div class="border p-4 rounded-lg" data-aos="fade-right">
                        <div class="flex justify-start gap-6">
                            <div class="bg-red-200 px-3 py-2 w-max h-max rounded-md">
                                <i class="fas fa-book text-2xl text-red-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Submission</p>
                                <div>
                                    <h1 class="text-2xl my-2"><strong>Pengajuan Judul</strong></h1>
                                </div>
                                <div class="text-sm text-gray-500">
                                    <p>Meningkatkan perjalanan akademis Anda dengan fitur 'Pengajuan Judul' karena setiap
                                        penelitian hebat dimulai dengan judul yang baik</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border p-4 rounded-lg" data-aos="fade-right">
                        <div class="flex justify-start gap-6">
                            <div class="bg-sky-200 px-3 py-2 w-max h-max rounded-md">
                                <i class="fas fa-file-circle-check text-2xl text-sky-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Nilai</p>
                                <div>
                                    <h1 class="text-2xl my-2"><strong>Penilaian</strong></h1>
                                </div>
                                <div class="text-sm text-gray-500">
                                    <p>Tingkatkan kualitas evaluasi dengan fitur penilaian kami. Detail dan analisis yang
                                        tepat
                                        untuk mendukung keputusan yang bijaksana. </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border p-4 rounded-lg" data-aos="fade-up">
                        <div class="flex justify-start gap-6">
                            <div class="bg-green-200 px-4 py-2 w-max h-max rounded-md">
                                <i class="fas fa-book text-2xl text-green-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Monitoring</p>
                                <div>
                                    <h1 class="text-2xl my-2"><strong>Bimbingan dan Kontrol TA</strong></h1>
                                </div>
                                <div class="text-sm text-gray-500">
                                    <p>Mendukung kemajuan akademis Anda melalui fitur 'Penilaian' yang transparan dan
                                        berorientasi pada pertumbuhan. Bersama, kita gapai keunggulan!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border p-4 rounded-lg" data-aos="fade-up">
                        <div class="flex justify-start gap-6">
                            <div class="bg-orange-200 px-4 py-2 w-max h-max rounded-md">
                                <i class="fas fa-book text-2xl text-orange-500"></i>
                            </div>
                            <div>
                                <p class="text-gray-400 text-sm">Kelola</p>
                                <div>
                                    <h1 class="text-2xl my-2"><strong>Penjadwalan</strong></h1>
                                </div>
                                <div class="text-sm text-gray-500">
                                    <p>Mengatur waktu tanpa kerumitan! Fitur penjadwalan kami memudahkan untuk mengelola
                                        agenda
                                        seminar atau sidang dengan efisiensi dan ketepatan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- section 4 -->
        <div class="min-h-screen mb-4">
            <div class="w-5/6 mx-auto pt-20">
                <img class="w-[50px] md:w-[100px]" data-aos="fade-up" src="../public/logo-ori.jpeg" alt="">
                <h1 class="text-4xl md:text-7xl my-4" data-aos="fade-up"><strong>Need Help</strong></h1>
                <h1 class="text-2xl md:text-7xl my-4 font-thin" data-aos="fade-up">with anything?</h1>
                <div class="md:flex justify-between" data-aos="fade-up">
                    <div class="my-10 md:my-20 ">
                        <a href="https://t.me/joinchat/VzNaQtwBK3fy0vuL" target="_blank" class="text-sky-500">Gabung
                            ke grup diskusi SITASI</a>
                        <div class="md:w-2/4 mt-7">
                            <p class="w-full">Jl. H.R. Soebrantas KM. 15 No. 155 Tuah Madani Kec. Tuah Madani – Pekanbaru
                                28298
                                PO
                                Box. 1004
                                Telepon
                                (0761) 562051; Faksimili (0761) 562052</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="py-2">Contact US</p>
                        <div class="border p-1 rounded-lg">
                            <img class="md:w-40" src="../public/qr-code.png" alt="qr">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <fab />

        <!-- footer -->
        <div class="md:flex justify-end px-5 py-4 border-t bg-slate-100">
            <div class="self-center">
                <p>&copy;2023 Prodi Sistem Informasi. All rights
                    reserved</p>
            </div>
        </div>

        <login v-if="showAction" @close="showAction = false" />
    </div>
</template>

<script setup>
const showAction = ref(false);

import { useAlumni } from "@/store/alumni";
import { useSeminarSidang } from "@/store/seminarSidang";

const alumni = useAlumni()
const seminarSidang = useSeminarSidang()

alumni.getCount();

seminarSidang.getData();

</script>