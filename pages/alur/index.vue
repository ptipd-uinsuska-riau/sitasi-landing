<template>
    <div>
        <topbar />

        <div class="bg-slate-50 min-h-screen text-gray-500">
            <div class="w-5/6 mx-auto py-20">
                <h1 class="text-4xl my-4 text-black" data-aos="zoom-in"><strong>Alur Tugas Akhir</strong></h1>
                <!-- judul page -->
                <div class="pt-4 relative mb-20" data-aos="fade-up">
                    <div>
                        <div class="w-full" data-aos="fade-up">
                            <p class="w-2/4 ">Bawa Tugas Akhirmu menuju puncak keberhasilan dengan Alur Tugas Akhir
                                kami. Simak langkah-langkahnya satu per satu, dan capai pencapaian luar biasa dalam
                                perjalanan
                                akademismu.</p>
                        </div>

                    </div>
                    <div class="absolute top-0 right-0">
                        <img class="w-[500px]" src="../../public/alur1.png" alt="alur-1">
                    </div>
                </div>

                <!-- submission -->
                <div class="bg-gray-50 shadow-md px-10 py-20">
                    <h1 class="text-2xl font-bold text-black">Alur Pengajuan Judul Tugas Akhir</h1>
                    <div class="flex gap-2 my-2">
                        <div v-for="(d, i) in submission.submissionData" :key="i"
                            :class="{ 'bg-sky-500': currentUrutan === d.urutan, 'bg-gray-300': currentUrutan !== d.urutan }"
                            class="w-10 h-2 rounded-full"></div>
                    </div>
                    <p>{{ currentUrutan }} dari 5</p>
                    <div class="my-10">
                        <p>{{ currentStepDescription }}</p>
                    </div>

                    <div class="flex gap-5">
                        <div v-for="d, i in  submission.submissionData" :key="i" class="grid justify-items-center">
                            <div
                                :class="{ 'alur-card-active': d.urutan === currentUrutan, 'alur-card-default': d.urutan !== currentUrutan }">
                                <i :class="d.icon"></i>
                                <p>{{ d.nama }}</p>
                            </div>
                            <div class="bg-sky-500 w-max rounded-full -mt-4" v-show="d.urutan === currentUrutan">
                                <i class="fas fa-check px-1 py-0 text-white"></i>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10">
                        <button @click="nextStep" class="btn-primary">Selanjutnya <i
                                class="fas fa-arrow-right-long ml-2"></i></button>
                    </div>
                </div>

                <!-- seminar/sidang -->
                <div class="flex justify-between relative">
                    <div class="bg-gray-50 shadow-md px-10 py-20 mt-10 w-4/6 ">
                        <h1 class="text-2xl font-bold text-black">Alur Pengajuan Seminar / Sidang</h1>
                        <div class="flex gap-2 my-2">
                            <div v-for="(d, i) in seminarSidang.seminarSidangData" :key="i"
                                :class="{ 'bg-sky-500': currentUrutanSeminar === d.index, 'bg-gray-300': currentUrutanSeminar !== d.index }"
                                class="w-10 h-2 rounded-full"></div>
                        </div>
                        <p>{{ currentUrutanSeminar }} dari 5</p>
                        <div class="grid grid-cols-1 my-4">
                            <div v-for="d, i in seminarSidang.seminarSidangData" :key="i"
                                :class="{ 'bg-sky-50 border border-sky-200': d.index === currentUrutanSeminar, 'bg-white': d.index !== currentUrutanSeminar }"
                                class="flex justify-between rounded-lg px-3 py-4 mb-2 w-11/12">
                                <div class="flex">
                                    <div :class="{ 'bg-sky-300 ': d.index === currentUrutanSeminar, 'bg-gray-300': d.index !== currentUrutanSeminar }"
                                        class=" w-10 h-10 rounded-full self-center"></div>
                                    <div class="ml-2">
                                        <h1 class="self-center font-bold text-black">{{ d.nama }}</h1>
                                        <p class="text-sm">{{ d.deskripsi }}</p>
                                    </div>
                                </div>
                                <div class="self-center">
                                    <i :class="{ 'text-sky-300 ': d.index === currentUrutanSeminar }"
                                        class="fas fa-arrow-right-long"></i>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between w-11/12">
                            <button @click="prevStepSeminar" class="btn-default"><i
                                    class=" fas fa-arrow-left-long mr-2"></i> Kembali</button>
                            <button @click="nextStepSeminar" class="btn-primary">Selanjutnya <i
                                    class=" fas fa-arrow-right-long ml-2"></i></button>
                        </div>

                    </div>

                    <div class="absolute top-52 right-0">
                        <img class="w-[500px]" src="../../public/alurseminarsidang.png" alt="alurseminarsidang">
                    </div>
                </div>

                <!-- Pengajuan Input Nilai di SITASI -->
                <div class="flex gap-4">
                    <!-- Input Nilai Seminar -->
                    <div class="bg-gray-50 shadow-md px-10 py-20 mt-10 w-1/2">
                        <h1 class="text-2xl font-bold text-black mb-10">Input Nilai Seminar</h1>
                        <div v-for="d, i in nilaiSeminar.nilaiSeminarData" :key="i" class="grid grid-cols-1 mb-10">
                            <div class="flex gap-4 relative ">
                                <div v-if="i !== 3" class="absolute border border-l border-sky-300 top-16 left-[26px] h-24">
                                </div>
                                <div class="bg-sky-300 rounded-full text-center self-center">
                                    <div class="w-max self-center px-3 py-3">
                                        <!-- <p class="text-white font-bold text-xl">01</p> -->
                                        <p class="text-white font-bold text-xl">{{ d.urut }}</p>
                                    </div>
                                </div>
                                <div>
                                    <h1 class="text-lg font-bold text-black">{{ d.nama }}</h1>
                                    <p>{{ d.deskripsi }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Inpur Nilai Tugas Akhir -->
                    <div class="bg-gray-50 shadow-md px-10 py-20 mt-10 w-1/2">
                        <h1 class="text-2xl font-bold text-black">Input Nilai Tugas Akhir</h1>
                        <div class="flex gap-2 my-2">
                            <div v-for="(d, i) in nilaiTa.nilaiTaData" :key="i" class="flex gap-2">
                                <div v-for="(k, j) in d.child" :key="j"
                                    :class="{ 'bg-sky-500': currentUrutanTa === k.index, 'bg-gray-300': currentUrutanTa !== k.index }"
                                    class="w-10 h-2 rounded-full">
                                </div>
                            </div>
                        </div>
                        <p>{{ currentUrutanTa }} dari 9</p>
                        <div class="my-10">
                            <p>{{ currentStepDescriptionTa }}
                            </p>
                        </div>
                        <div v-for="d, i in nilaiTa.nilaiTaData" :key="i" class="mb-4">
                            <h1 class="my-2 text-black font-bold">{{ d.grup }}</h1>
                            <div class="flex gap-2">
                                <div v-for="j, k in d.child" :key="k"
                                    :class="{ 'border-sky-300 text-sky-500': currentUrutanTa === j.index, 'border-gray-300 text-gray-500': currentUrutanTa !== j.index }"
                                    class="border rounded-md px-2 py-1 w-max">
                                    <p class="inline-block w-max">{{ j.nama }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <button @click="prevStepTa" class="btn-default"><i class=" fas fa-arrow-left-long mr-2"></i>
                                Kembali</button>
                            <button @click="nextStepTa" class="btn-primary">Selanjutnya <i
                                    class=" fas fa-arrow-right-long ml-2"></i></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAlur } from "@/store/alur";

const currentUrutan = ref(1);
const currentUrutanSeminar = ref(1);
const currentUrutanTa = ref(1);

const submission = useAlur();
const seminarSidang = useAlur();
const nilaiSeminar = useAlur();
const nilaiTa = useAlur();


submission.getDataSubmission();
seminarSidang.getDataSeminarSidang();
nilaiSeminar.getDataNilaiSeminar();
nilaiTa.getDataNilaiTugasAkhir();

const nextStep = () => {
    if (currentUrutan.value < submission.submissionData.length) {
        currentUrutan.value += 1;
    } else {
        // Jika sudah mencapai langkah terakhir, kembali ke langkah pertama
        currentUrutan.value = 1;
    }

    // Update currentStepDescription setelah mengubah currentUrutan
    updateCurrentStepDescription();
};

const nextStepSeminar = () => {
    if (currentUrutanSeminar.value < seminarSidang.seminarSidangData.length) {
        currentUrutanSeminar.value += 1;
    }
};

const prevStepSeminar = () => {
    if (currentUrutanSeminar.value > 1) {
        currentUrutanSeminar.value -= 1;
    }
};

const nextStepTa = () => {
    // Menghitung total jumlah child dari semua grup
    const totalChild = nilaiTa.nilaiTaData.reduce((total, group) => total + group.child.length, 0);

    // Memeriksa apakah currentUrutanTa masih kurang dari total jumlah child
    if (currentUrutanTa.value < totalChild) {
        currentUrutanTa.value += 1;
    }

    updateCurrentStepDescriptionTa();
};

const prevStepTa = () => {
    if (currentUrutanTa.value > 1) {
        currentUrutanTa.value -= 1;
    }

    updateCurrentStepDescriptionTa();
};

// Computed property untuk mendapatkan deskripsi langkah saat ini berdasarkan urutan
const currentStepDescription = ref(
    submission.submissionData.length > 0
        ? submission.submissionData.find(step => step.urutan === currentUrutan.value)?.deskripsi || ""
        : ""
);

// Fungsi untuk memperbarui currentStepDescription berdasarkan currentUrutan
const updateCurrentStepDescription = () => {
    currentStepDescription.value =
        submission.submissionData.length > 0
            ? submission.submissionData.find(step => step.urutan === currentUrutan.value)?.deskripsi || ""
            : "";
};

// Computed property untuk mendapatkan deskripsi langkah saat ini berdasarkan index di child
const currentStepDescriptionTa = computed(() => {
    // Mengecek apakah nilai currentUrutanTa ada dalam rentang yang benar
    if (currentUrutanTa.value >= 0 && currentUrutanTa.value < 9) {
        // Iterasi setiap grup dalam nilaiTa.nilaiTaData
        for (const group of nilaiTa.nilaiTaData) {
            // Mencari langkah dengan index sesuai dengan currentUrutanTa
            const currentStep = group.child.find(step => step.index === currentUrutanTa.value + 1);

            // Jika langkah ditemukan, kembalikan deskripsi
            if (currentStep) {
                return currentStep.deskripsi || "";
            }
        }
    }

    // Jika nilai currentUrutanTa tidak valid atau langkah tidak ditemukan, kembalikan string kosong
    return "";
});

// Fungsi untuk memperbarui currentStepDescription berdasarkan currentUrutanTa
const updateCurrentStepDescriptionTa = () => {
    currentStepDescriptionTa.value =
        nilaiTa.nilaiTaData.length.length > 0
            ? nilaiTa.nilaiTaData.length.find(step => step.index === currentUrutanTa.value)?.child.deskripsi || ""
            : "";
};

</script>


