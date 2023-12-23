// Import library yang diperlukan
import { defineStore } from 'pinia';

// Define store untuk data
export const useBerkas = defineStore('berkas', {
    // State untuk menyimpan data
    state: () => ({
        data: [],
        loading: false,
        error: '',
    }),

    actions: {
        async getData() {
            try {
                this.loading = true;

                const res = {
                    data: [
                        {
                            "nama": "Bukti Menghadiri Seminar Proposal",
                            "size": "109 KB",
                            "kode": "FORMB0",
                            "label": ["Lainya"],
                            "path": "/berkas/FORMB0.pdf"
                        },
                        {
                            "nama": "Bukti Selesai Laporan Kerja Praktek (KP)",
                            "size": "109 KB",
                            "kode": "FORMB1",
                            "label": ["Lainya", "Submision"],
                            "path": "/berkas/FORMB1.pdf"
                        },
                        {
                            "nama": "Bukti Selesai Laporan Praktikum",
                            "size": "107 KB",
                            "kode": "FORMB2",
                            "label": ["Lainya", "Submision"],
                            "path": "/berkas/FORMB2.pdf"
                        },
                        {
                            "nama": "Kartu Bimbingan Tugas Akhir",
                            "size": "112 KB",
                            "kode": "FORMB3",
                            "label": ["Lainya"],
                            "path": "/berkas/FORMB3.pdf"
                        },
                        {
                            "nama": "Formulir Pengajuan Tugas Akhir",
                            "size": "107 KB",
                            "kode": "FORMTA01",
                            "label": ["Lainya"],
                            "path": "/berkas/FORMTA01.pdf"
                        },
                        {
                            "nama": "Formulir Pengajuan Seminar/Sidang Tugas Akhir",
                            "size": "108 KB",
                            "kode": "FORMTA04",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA04.pdf"
                        },
                        {
                            "nama": "Daftar Hadir Presensi",
                            "size": "109 KB",
                            "kode": "FORMTA06",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA06.pdf"
                        },
                        {
                            "nama": "Form Penilaian Pembimbing",
                            "size": "119 KB",
                            "kode": "FORMTA07",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA07.pdf"
                        },
                        {
                            "nama": "Form Penilaian Pembimbing/Penguji",
                            "size": "93 KB",
                            "kode": "FORMTA08",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA08.pdf"
                        },
                        {
                            "nama": "Berita Acara",
                            "size": "111 KB",
                            "kode": "FORMTA09",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA09.pdf"
                        },
                        {
                            "nama": "Rekapitulasi Nilai Tugas Akhir",
                            "size": "110 KB",
                            "kode": "FORMTA06",
                            "label": ["Seminar", "Sidang"],
                            "path": "/berkas/FORMTA10.pdf"
                        },
                        {
                            "nama": "Rekapitulasi Nilai Sidang Tugas Akhir",
                            "size": "111 KB",
                            "kode": "FORMTA11",
                            "label": ["Sidang"],
                            "path": "/berkas/FORMTA11.pdf"
                        },
                        {
                            "nama": "Formulir pergantian Pembingbing",
                            "size": "108 KB",
                            "kode": "FORMTA13",
                            "label": ["Lainya"],
                            "path": "/berkas/FORMTA13.pdf"
                        }
                    ]

                }

                if (res.data) {
                    this.data = res.data;
                } else {
                    this.error = 'Gagal mengambil data dari simulasi';
                }
                this.loading = false;
            } catch (error) {
                this.loading = false
                this.error = error
            }
        },
    },

});
