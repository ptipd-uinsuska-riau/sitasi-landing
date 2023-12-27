<template>
    <div>
        <topbar />

        <div class="bg-slate-50 min-h-screen">
            <div class="w-5/6 mx-auto py-20">
                <h1 class="text-4xl my-4" data-aos="zoom-in"><strong>Seleksi Judul</strong></h1>

                <div class="md:flex justify-between pt-4 gap-8" data-aos="zoom-in">

                    <div class="mb-4" data-aos="fade-up">
                        <p class="w-full md:w-10/12 text-gray-500">Pemilihan judul yang tepat adalah awal yang baik untuk
                            perjalanan
                            akademis Anda. Mari bersama-sama melalui proses Seleksi Judul untuk menemukan inspirasi
                            terbaik!</p>
                    </div>
                    <div class=" bg-gray-100 rounded-lg shadow-sm px-4 py-2 w-full md:w-3/5">
                        <div class="flex justify-between">
                            <div class="justify-items-start">
                                <h1 class="font-bold text-lg">Judul Proposal Lulus</h1>
                                <div>
                                    <h1 class="font-bold text-3xl">450<span
                                            class="text-sm text-default font-thin">/500</span>
                                    </h1>
                                </div>
                            </div>
                            <div class=" bg-gray-200 px-2 py-1 h-full rounded-md text-sky-500">
                                <p><i class="fas fa-calendar-days"></i> 2023</p>
                            </div>
                        </div>

                        <div class="flex py-3 gap-4">
                            <div class="mt-2 grow shrink basis-0 h-full self-stretch bg-sky-200 rounded-r-full justify-start
                             inline-flex">
                                <div class="w-[90%] h-2 bg-sky-500"></div>
                            </div>
                            <div class="items-center text-default">
                                95%
                            </div>
                        </div>
                    </div>

                </div>

                <!-- filter table -->
                <div class="md:flex justify-between pt-10">
                    <div class="md:flex gap-2">
                        <div class="w-full md:w-52 mb-2">
                            <select class="w-full p-[11px] border border-sky-200 rounded-lg focus:border-sky-500" id="tahun"
                                v-model="selectedYear" @change="handleChange">
                                <option value="" disabled selected>Tahun</option>
                                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-3 md:flex gap-2 text-sky-500 mb-2 justify-center w-full">
                            <button class="w-full py-2 px-2 border rounded-lg 
                    focus:border-sky-500
                    {{ sesi === '1' ? 'bg-sky-500 text-white' : 'border-sky-200 text-sky-500' }}"
                                @click="setFilter(1)">
                                Sesi 1
                            </button>
                            <button class="w-full py-2 px-2 border rounded-lg 
                    focus:border-sky-500
                    {{ sesi === '2' ? 'bg-sky-500 text-white' : 'border-sky-200 text-sky-500' }}"
                                @click="setFilter(2)">
                                Sesi 2
                            </button>
                            <button class="w-full py-2 px-2 border rounded-lg 
                    focus:border-sky-500
                    {{ sesi === '3' ? 'bg-sky-500 text-white' : 'border-sky-200 text-sky-500' }}"
                                @click="setFilter(3)">
                                Sesi 3
                            </button>
                        </div>

                        <div class="md:w-80">
                            <input class="p-[10px] border border-sky-200 rounded-lg focus:border-sky-500 mb-2 w-full"
                                type="text" v-model="nama" placeholder="Nama Mahasiswa">
                        </div>
                    </div>

                    <div class="md:flex gap-2">
                        <div class="mb-2">
                            <button
                                class="w-full py-2 px-2 bg-sky-400 text-white border border-sky-200 rounded-lg focus:border-sky-500"
                                @click="getDataAndSubmit">
                                <i class="fas fa-magnifying-glass"></i> Cari
                            </button>
                        </div>

                        <div class="mb-2">
                            <button
                                class="w-full py-2 px-2 bg-sky-100 text-sky-500 border border-sky-200 rounded-lg focus:border-sky-500"
                                @click="resetFilter">
                                <i class="fas fa-arrow-rotate-left"></i> Reset
                            </button>
                        </div>
                    </div>
                </div>


                <!-- table data -->
                <div class="overflow-x-auto grid grid-cols-1 w-full ">
                    <table class="mt-2 w-max min-w-full border">
                        <thead class="bg-gray-200">
                            <tr class="text-sm">
                                <td class="px-4 py-4"></td>
                                <td class="px-4 py-4">Mahasiswa</td>
                                <td class="px-4 py-4">Topik</td>
                                <td class="px-4 py-4">Judul</td>
                                <td class="px-4 py-4 text-center">Nilai</td>
                                <td class="px-4 py-2"></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="d, i in submission.data.data" :key="i" class="hover:bg-sky-50">
                                <td class="pl-4 w-14">
                                    <img v-if="d.avatar" :src="d.avatar" alt="" class="object-cover w-10 h-10 rounded-full">
                                    <img v-else class="object-cover w-10 h-10 rounded-full" src="../../public/uin.jpeg"
                                        alt="avatar">
                                </td>
                                <td class="p-4 w-40">
                                    <p class="text-sm font-bold">{{ d.nama }}</p>
                                    <p class="text-sm">{{ d.nim }}</p>
                                </td>
                                <td class="p-4 w-40">{{ d.topik }}</td>
                                <td class="p-4 w-96">
                                    <p class="capitalize text-sm">{{ d.judul }}</p>
                                </td>
                                <td :class="{ 'text-sky-500': d.nilai > 40, 'text-green-500': d.nilai > 30, 'text-orange-500': d.nilai < 30, 'text-red-500': d.nilai < 20 }"
                                    class="p-4 w-10 text-center">
                                    {{ d.nilai === 0 ? "--" : d.nilai }}
                                </td>
                                <td class="p-4 w-20">
                                    <div :class="{ 'bg-sky-100 text-sky-600': d.status === 'Diterima', 'bg-red-100 text-red-600': d.status === 'Ditolak' }"
                                        class="rounded-full py-1 px-2  w-20 text-sm text-center">
                                        {{ d.status }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Tombol untuk navigasi paginasi -->
                <div class="flex gap-2 justify-end mt-2">
                    <div class=" bg-gray-50 px-4 rounded-md border border-gray-300 hover:border-sky-500 focus:bg-sky-700">
                        <label for="px-2 py-1">Limit Data</label>
                        <select class="px-1 py-2 h-full" id="limit" v-model="limit" @change="changeLimit">
                            <option v-for="option in limitOptions" :key="option" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    <div
                        class="bg-gray-50 px-2 py-1 rounded-md border border-gray-300 hover:border-sky-500 focus:bg-sky-700">
                        <button @click="previousPage" :disabled="payload.page === 1"><i
                                class="fas fa-chevron-left"></i></button>
                    </div>
                    <div
                        class="bg-gray-50 px-2 py-1 rounded-md border border-gray-300 hover:border-sky-500 focus:bg-sky-700">
                        <button @click.prevent="nextPage" :disabled="submission.data.data < payload.page"><i
                                class="fas fa-chevron-right self-center"></i></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useSubmission } from "@/store/pengumuman";

const submission = useSubmission()

let nama = '';
let sesi = '';
let selectedYear = '';
const years = ref([]);

let limit = ref(10) // Default limit
let page = ref(1); // Default page
const limitOptions = [5, 10, 20, 50, 100];
let total_page = ref(null); // Gunakan ref untuk memastikan reactive

const previousPage = () => {
    if (payload.page > 1) {
        payload.page--;
        getDataAndSubmit();
    }
};

const changeLimit = () => {
    payload.limit = limit;
    payload.page = 1; // Reset start when changing limit
    getDataAndSubmit();
};


// onMounted(() => {
//     populateYears();
//     getDataAndSubmit();
// });

onMounted(async () => {
    // Menunggu getData selesai
    await getDataAndSubmit();
    populateYears();
    // Setelah getData selesai, total_page diisi dengan nilai yang sesuai
    total_page.value = submission.data.total_pages;
});

function populateYears() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 6; i++) {
        years.value.push(currentYear - i);
    }
}

function setFilter(selectedSesi) {
    // Mengatur nilai sesi di dalam komponen
    sesi = selectedSesi.toString();
}

const payload = {
    nama: '',
    sesi: '',
    tahun: '',
    limit: limit.value,
    page: page.value
};

const getDataAndSubmit = async () => {
    // Kumpulkan nilai filter
    const payload = {
        nama: nama,
        sesi: sesi,
        tahun: selectedYear,
        limit: limit.value,
        page: page.value
    };

    // Eksekusi API
    await submission.getData(payload);
};

const nextPage = () => {
    console.log(page.value + "payload.page");
    console.log(total_page.value + "total_page.value");
    if (page.value < total_page.value) {
        page.value++;
        getDataAndSubmit();
    }
};

const resetFilter = () => {
    // Reset nilai filter jika diperlukan
    nama = '';
    sesi = '';
    selectedYear = '';

    submission.getData(payload);
};

submission.getData(payload);

</script>