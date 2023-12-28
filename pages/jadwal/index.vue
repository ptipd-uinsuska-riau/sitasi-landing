<template>
    <div>
        <topbar />

        <div class="bg-slate-50 min-h-screen">
            <div class="w-5/6 mx-auto py-10">
                <!-- title -->
                <h1 class="text-4xl my-4" data-aos="zoom-in"><strong>Jadwal Sesi</strong></h1>
                <div class="py-4" data-aos="fade-up">
                    <p class="md:w-4/5 text-default">Sesi yang terencana dengan baik dimulai dengan informasi
                        yang lengkap. Dengan <span class="font-bold"> Jadwal Sesi</span> kami, dapatkan visibilitas
                        penuh untuk setiap
                        detail,
                        membantu Anda merancang masadepan yang sukses.</p>
                </div>

                <!-- judul -->
                <div class="pt-2 pb-4">
                    <h1 class="py-4 font-bold" data-aos="zoom-in">Batas Pengajuan Judul Proposal</h1>
                    <div class="grid grid-cols-3 gap-1 text-sky-500 md:w-1/4" data-aos="fade-up">
                        <div class="text-center w-auto bg-white py-2 rounded-md shadow-md">
                            <h1 class="text-4xl font-bold">23</h1>
                            <p>00</p>
                        </div>
                        <div class="text-center w-auto bg-white py-2 rounded-md shadow-md">
                            <h1 class="text-4xl font-bold">09</h1>
                            <p>NOV</p>
                        </div>
                        <div class="text-center w-max bg-white py-2 px-2 rounded-md shadow-md">
                            <h1 class="text-4xl font-bold">2023</h1>
                        </div>
                    </div>
                </div>

                <div class="pt-2 pb-4 relative z-30" data-aos="zoom-in">
                    <h1 class="py-4 font-bold">Pelaksanaan Seminar dan Sidang Tugas Akhir</h1>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:w-3/4">
                        <div v-for="i in 4" :key="i"
                            class="text-center justify-start w-full bg-sky-100 px-3 py-2 text-sky-500 rounded-lg">
                            <div><i class="fa-regular fa-calendar text-4xl"></i></div>
                            <div class="font-bold text-lg">20 Jan</div>
                            <p class="text-sm">Pendaftaran Sidang</p>
                        </div>
                    </div>
                </div>

                <div class="pt-20 relative" data-aos="zoom-in">
                    <p class="md:w-2/4 text-sm text-default z-30">Informasi mengenai sesi pelaksanaan tugas akhir dapat
                        berubah
                        sewaktu waktu, harap
                        update informasi
                        terkini dan cek halaman serta informasi secara berkala</p>

                    <div class="hidden md:block absolute bottom-0 right-0 z-90">
                        <img src="../../public/jadwal.png" alt="jadwal">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
