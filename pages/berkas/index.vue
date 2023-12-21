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
                        <button
                            class="bg-orange-50 px-3 py-2 rounded-full border border-orange-300 text-orange-500 hover:border-orange-400 focus:border-orange-600">
                            <i class="fas fa-filter hidden md:block"></i> Submission
                        </button>

                    </div>
                    <div>
                        <button
                            class="bg-sky-50 px-3 py-2 rounded-full border border-sky-300 text-sky-500 hover:border-sky-400 focus:border-sky-600">
                            <i class="fas fa-filter hidden md:block"></i> Seminar</button>
                    </div>
                    <div>
                        <button
                            class="bg-green-50 px-3 py-2 rounded-full border border-green-300 text-green-500 hover:border-green-400 focus:border-green-600">
                            <i class="fas fa-filter hidden md:block"></i> Sidang</button>
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
                            <tr v-for="i in 9" :key="i" class="text-sm border hover:bg-sky-50">
                                <td class="p-4"> <i class="fas fa-file-pdf text-sky-500 w-max mr-3"></i> Form Selesai KP
                                </td>
                                <td class="p- text-center">4.9 MB</td>
                                <td class="p-4 text-center">TA01</td>
                                <td class="p-4">
                                    <div class="bg bg-sky-100 px-2 py-1 w-max rounded-full text-sky-500">Proposal</div>
                                </td>
                                <td class="p-4"> <i class="fas fa-download text-sky-500"></i> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>
