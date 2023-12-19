<template>
    <topbar />
    <!-- section 1 -->
    <div class="bg-slate-50 min-h-screen">
        <div class="w-5/6 mx-auto py-20">
            <h1 class="text-4xl my-4" data-aos="zoom-in"><strong>Survei Lulusan</strong></h1>

            <div class="flex justify-between pt-4 gap-8" data-aos="zoom-in">
                <div>
                    <div class="w-full" data-aos="fade-up">
                        <p class="w-4/6 text-gray-500">Suara lulusan penting bagi kami! Isi survei lulusan dan bantu kami
                            memperbaiki pengalaman akademis untuk generasi mendatang. </p>
                    </div>

                    <div class="bg-white w-full rounded-lg py-4 px-6 h-max shadow-md mt-4">
                        <p class="text-gray-500"><span class="font-bold">Kuesioner</span> ini berhubungan dengan harapan dan
                            persepsi Anda sebagai
                            pengguna lulusan
                            Universitas Islam
                            Negeri Sultan Syarif Kasim Riau. Identitas dan penilaian dari anda dijamin kerahasiaannya.</p>
                    </div>
                    <div class="mt-7 relative">
                        <input class="px-4 py-3 w-full rounded-full border" type="text" placeholder="Nama Alumni">
                        <i
                            class="fas fa-search bg-sky-600 rounded-full p-3 absolute right-2 top-[6px] text-white hover:bg-green-700 active:bg-green-800"></i>
                    </div>
                </div>
                <div>
                    <img class="w-[500px]" src="../../public/uin.jpeg" alt="lulusan">
                </div>
            </div>

            <div class="mt-10">
                <div class="overflow-x-auto grid grid-cols-1 w-full ">
                    <table class="mt-2 w-max min-w-full border">
                        <thead class="bg-gray-200">
                            <tr class="text-sm">
                                <td class="px-4 py-4"></td>
                                <td class="px-4 py-4 w-80">Nama Alumni</td>
                                <td class="px-4 py-4">Tahun Lulus</td>
                                <td class="px-4 py-4 text-center w-32">Studi</td>
                                <td class="px-4 py-2"></td>
                            </tr>
                        </thead>

                        <tr v-for="(d, i) in alumni.data" :key="i" class="hover:bg-sky-50">
                            <td class="pl-4 w-14">
                                <img v-if="d.foto_profil" :src="d.foto_profil" alt=""
                                    class="object-cover w-10 h-10 rounded-full">
                                <img v-else class="object-cover w-10 h-10 rounded-full" src="../../public/uin.jpeg"
                                    alt="avatar">
                            </td>
                            <td class="p-4 w-40">
                                <p class="text-sm font-bold">{{ d.nama }}</p>
                                <p class="text-sm">{{ d.nim }}</p>
                            </td>
                            <td class="p-4 text-sm">{{ useMomentDate(d.tanggal_lulus) }}</td>
                            <td class="p-4 text-sm">
                                <div class="flex justify-around gap-2">
                                    <div>
                                        <p class="bg-sky-100 py-1 px-2 w-max rounded-lg text-sky-500 ">{{ d.masa_studi }}
                                            Semester
                                        </p>
                                    </div>
                                    <div>
                                        <p class="bg-sky-100 py-1 px-2 w-max rounded-lg text-green-500 ">IPK {{ d.ipk }}</p>
                                    </div>

                                </div>
                            </td>
                            <td class="p-4 text-end">
                                <a class="bg-sky-500 rounded-md  py-1 px-4 text-white focus:bg-sky-600 text-sm"
                                    :href="`https://sitasi.uin-suska.ac.id/survey/pengguna_alumni/${d.nim}`"
                                    target="_blank">Pilih</a>
                            </td>
                        </tr>
                        <tbody>

                        </tbody>

                    </table>
                </div>
            </div>


        </div>
    </div>


    
</template>

<script setup>

import { useAlumni } from "@/store/alumni";

const alumni = useAlumni()
const nama = ""

const payload = {
    prodi: "informasi",
    fakultas: "",
    tahun_masuk: "",
    tahun: "",
    nama: nama,
    start: 0,
    length: 10 //default 10
}

alumni.getData(payload)

</script>