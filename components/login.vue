<template>
    <div>
        <div class="fixed z-[99] inset-0 overflow-y-auto" aria-labelledby="dialog-1-title" role="dialog" aria-modal="true">
            <div
                class="flex items-center md:items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:w-2/4 sm:w-full">
                    <div class="bg-white p-4">
                        <div class="md:flex items-center">
                            <div class="w-full mx-auto">
                                <div class="p-2">
                                    <div class="text-center">
                                        <h1 class="text-2xl text-sky-500 font-extrabold">LOGIN SITASI</h1>
                                        <h1 class="mb-6 text-default mt-2">Silahkan Pilih Peran Anda untuk mulai mengakses
                                        </h1>
                                    </div>
                                    <div class="md:flex gap-4">
                                        <div
                                            class="border rounded-lg p-6 text-gray-500 hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 hover:scale-105 transition-all duration-500">
                                            <a class="" href="https://prodisi.uin-suska.ac.id/login">
                                                <div class="flex gap-4 ">
                                                    <div class="self-center"><i class="fas fa-user text-4xl h-max"></i>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-xl font-bold ">Mahasiswa</h1>
                                                        <p class="text-sm">Authentikasi Menggunakan akun
                                                            iRaise
                                                            mahasiswa.
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div
                                            class="border rounded-lg p-6 text-gray-500 hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 hover:scale-105 transition-all duration-500">
                                            <a class="" href="https://prodisi.uin-suska.ac.id/logindosen">
                                                <div class="flex gap-4 ">
                                                    <div class="self-center"><i class="fas fa-user text-4xl h-max"></i>
                                                    </div>
                                                    <div>
                                                        <h1 class="text-xl font-bold ">Dosen</h1>
                                                        <p class="text-sm">Authentikasi khusus dosen dan admin prodi
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="flex justify-end mt-10 gap-x-4">
                                        <button type="button"
                                            class="text-sm bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
                                            @click.prevent="$emit('close')"><i class="fas fa-times"></i> Tutup</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>