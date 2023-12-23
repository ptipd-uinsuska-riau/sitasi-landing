<template>
    <div>
        <topbar />
        <div class="bg-slate-100 min-h-screen">
            <div class="w-5/6 mx-auto py-10">
                <h1 class="text-2xl md:text-4xl my-4" data-aos="fade-up"><strong>Berkas Tugas Akhir</strong></h1>
                <div class="md:w-4/5 mb-5" data-aos="fade-up">
                    <p class="text-xl text-gray-500"> Langkah terakhir menuju kelulusan! Berkas Tugas Akhir adalah bukti
                        perjalanan akademis yang penuh
                        dedikasi.</p>
                </div>

                <div class="flex justify-end gap-3 text-sm">
                    <div>
                        <button @click="applyFilter('Submision')" :class="getFilterButtonClass('Submision')">
                            <i class="fas fa-filter  hidden md:inline-block"></i> Submission
                        </button>
                    </div>
                    <div>
                        <button @click="applyFilter('Seminar')" :class="getFilterButtonClass('Seminar')">
                            <i class="fas fa-filter  hidden md:inline-block"></i> Seminar
                        </button>
                    </div>
                    <div>
                        <button @click="applyFilter('Sidang')" :class="getFilterButtonClass('Sidang')">
                            <i class="fas fa-filter hidden md:inline-block"></i> Sidang
                        </button>
                    </div>
                    <div>
                        <button @click="applyFilter('Lainya')" :class="getFilterButtonClass('Lainya')">
                            <i class="fas fa-filter hidden md:inline-block"></i>
                            Lainya
                        </button>
                    </div>
                </div>
                <div class="overflow-x-auto grid grid-cols-1 w-full ">
                    <table class="mt-2 w-max min-w-full border text-gray-500">
                        <thead class="bg-gray-200">
                            <tr class="text-sm">
                                <th class="px-4 py-4">Nama Berkas</th>
                                <th class="px-4 py-4">Size</th>
                                <th class="px-4 py-4">Kode Berkas</th>
                                <th class="px-4 py-4"></th>
                                <th class="px-4 py-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="d, i in filteredData" :key="i" class="text-sm border hover:bg-sky-50">
                                <td class="p-4"> <i class="fas fa-file-pdf text-sky-500 w-max mr-3"></i> {{ d.nama }}</td>
                                <td class="p- text-center">{{ d.size }}</td>
                                <td class="p-4 text-center">{{ d.kode }}</td>
                                <td class="p-4">
                                    <div class="flex gap-1">
                                        <div v-for="(j, k) in d.label" :key="k" :class="getLabelColorClass(j)">
                                            {{ j }}
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">
                                    <a :href="d.path" target="_blank">
                                        <i class="fas fa-download text-sky-500"></i> Unduh
                                    </a>
                                </td>

                                <!-- <td class="p-4"> <i class="fas fa-download text-sky-500"></i> </td> -->
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { useBerkas } from "@/store/berkas";
import { ref } from 'vue';

const berkas = useBerkas();

berkas.getData();

const getLabelColorClass = (label) => {
    const colorClasses = {
        'Lainya': 'bg-gray-100 px-2 py-1 w-max rounded-full text-gray-500',
        'Submision': 'bg-orange-100 px-2 py-1 w-max rounded-full text-orange-500',
        'Sidang': 'bg-green-100 px-2 py-1 w-max rounded-full text-green-500',
        'Seminar': 'bg-sky-100 px-2 py-1 w-max rounded-full text-sky-500',
    };

    return colorClasses[label] || '';
};

const filterStatus = ref({
    'Lainya': false,
    'Submision': false,
    'Sidang': false,
    'Seminar': false,
});

const applyFilter = (label) => {
    filterStatus.value[label] = !filterStatus.value[label];
};

const filteredData = computed(() => {
    return berkas.data.filter((item) => {
        if (filterStatus.value['Lainya'] || filterStatus.value['Submision'] || filterStatus.value['Sidang'] || filterStatus.value['Seminar']) {
            return item.label.some((label) => filterStatus.value[label]);
        }
        return true;
    });
});

const getFilterButtonClass = (label) => {
    return {
        'bg-orange-50': filterStatus.value[label],
        'bg-sky-50': filterStatus.value[label],
        'bg-green-50': filterStatus.value[label],
        'bg-gray-50': !filterStatus.value['Lainya'] && !filterStatus.value['Submision'] && !filterStatus.value['Seminar'] && !filterStatus.value['Sidang'],
        'px-3 py-2 rounded-full border': true,
        'border-orange-300': filterStatus.value[label],
        'border-sky-300': filterStatus.value[label],
        'border-green-300': filterStatus.value[label],
        'border-gray-300': !filterStatus.value['Lainya'] && !filterStatus.value['Submision'] && !filterStatus.value['Seminar'] && !filterStatus.value['Sidang'],
        'text-orange-500': filterStatus.value[label],
        'text-sky-500': filterStatus.value[label],
        'text-green-500': filterStatus.value[label],
        'text-gray-500': !filterStatus.value['Lainya'] && !filterStatus.value['Submision'] && !filterStatus.value['Seminar'] && !filterStatus.value['Sidang'],
        'hover:border-orange-400': filterStatus.value[label],
        'hover:border-sky-400': filterStatus.value[label],
        'hover:border-green-400': filterStatus.value[label],
        'hover:border-gray-400': !filterStatus.value['Lainya'] && !filterStatus.value['Submision'] && !filterStatus.value['Seminar'] && !filterStatus.value['Sidang'],
        'focus:border-orange-600': filterStatus.value[label],
        'focus:border-sky-600': filterStatus.value[label],
        'focus:border-green-600': filterStatus.value[label],
        'focus:border-gray-600': !filterStatus.value['Lainya'] && !filterStatus.value['Submision'] && !filterStatus.value['Seminar'] && !filterStatus.value['Sidang'],
    };
};

</script>

