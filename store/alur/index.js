// Import library yang diperlukan
import { defineStore } from 'pinia';

// Define store untuk data
export const useAlur = defineStore('alur', {
    // State untuk menyimpan data
    state: () => ({
        submissionData: [],
        seminarSidangData: [],
        nilaiSeminarData: [],
        nilaiTaData: [],
        loading: false,
        error: '',
    }),

    actions: {
        async getDataSubmission() {
            try {
                this.loading = true;

                const res = {
                    data: [
                        {
                            "urutan": 1,
                            "nama": "Berkas",
                            "icon": "fas fa-check px-1 py-0 text-4xl mb-4",
                            "deskripsi": "Unggah berkas persyaratan pendaftaran judul, sesuai sesi pengajuan judul telah dibuka oleh Kaprodi"
                        },
                        {
                            "urutan": 2,
                            "nama": "Seleksi",
                            "icon": "fas fa-check-to-slot px-1 py-0 text-4xl mb-4",
                            "deskripsi": "Proses seleksi judul oleh Kaprodi, jika lulus seleksi akan di teruskan ke reviewer untuk proses review prosposal masuk"
                        },
                        {
                            "urutan": 3,
                            "nama": "Review",
                            "icon": "fas fa-sliders px-1 py-0 text-4xl mb-4",
                            "deskripsi": "Review proposal dilakukan oleh seluruh dosen prodi dengan melakukan penilaian langsung terhadap konten proposal"
                        },
                        {
                            "urutan": 4,
                            "nama": "Penetapan",
                            "icon": "fas fa-gavel px-1 py-0 text-4xl mb-4",
                            "deskripsi": "Penetapan Keputusan seleksi judul proposal berdasarkan hasil review"
                        },
                        {
                            "urutan": 5,
                            "nama": "Pembimbing",
                            "icon": "fas fa-users px-1 py-0 text-4xl mb-4",
                            "deskripsi": "Penentuan dosen pembimbing untuk mahasiswa lulus judul proposal"
                        }
                    ]
                }

                if (res.data) {
                    this.submissionData = res.data;
                } else {
                    this.error = 'Gagal mengambil data dari simulasi';
                }
                this.loading = false;
            } catch (error) {
                this.loading = false
                this.error = error
            }
        },
        async getDataSeminarSidang() {
            try {
                this.loading = true;
                const res = {
                    data: [
                        {
                            "index": 1,
                            "nama": "Upload Berkas",
                            "deskripsi": "Upload berkas syarat pendaftaran seminar"
                        },
                        {
                            "index": 2,
                            "nama": "Verifikasi Berkas",
                            "deskripsi": "Proses pemeriksaan berkas pengajuan Oleh admin"
                        },
                        {
                            "index": 3,
                            "nama": "Penetapan Penguji",
                            "deskripsi": "Penentuan Nama Penguji oleh kaprodi"
                        },
                        {
                            "index": 4,
                            "nama": "Penetapan",
                            "deskripsi": "Admin Menentukan Jadwal dan Ruangan pelaksaan seminar/Sidang"
                        },
                        {
                            "index": 5,
                            "nama": "Pelaksanaan",
                            "deskripsi": "Seminar/sidang dilaksanakan sesuai jadwal yang telah ditentukan"
                        }
                    ]
                }

                if (res.data) {
                    this.seminarSidangData = res.data;
                } else {
                    this.error = 'Gagal mengambil data dari simulasi';
                }
                this.loading = false;
            } catch (error) {
                this.loading = false
                this.error = error
            }
        },
        async getDataNilaiSeminar() {
            try {
                this.loading = true;
                const res = {
                    data: [
                        {
                            "index": 1,
                            "urut": "01",
                            "nama": "Upload Berkas",
                            "deskripsi": "Setelah menyelesaikan revisi pasca seminar, unggah berkas pada menu yang telah disediakan."
                        },
                        {
                            "index": 2,
                            "urut": "02",
                            "nama": "Verifikasi Berkas",
                            "deskripsi": "Proses pemeriksaan berkas pengajuan Oleh admin. Jika berkas sesuai maka lanjut ke tahap berikutnya"
                        },
                        {
                            "index": 3,
                            "urut": "03",
                            "nama": "Input Nilai",
                            "deskripsi": "Penginputan Nilai dilakukan pada sistem sitasi yang terintegrasi dengan iRaise"
                        },
                        {
                            "index": 4,
                            "urut": "04",
                            "nama": "Selesai",
                            "deskripsi": "Setelah status pada aplikasi menunjukkan selesai, Anda dapat memeriksa nilai pada sistem iRaise untuk memastikan."
                        },
                    ]
                }

                if (res.data) {
                    this.nilaiSeminarData = res.data;
                } else {
                    this.error = 'Gagal mengambil data dari simulasi';
                }
                this.loading = false;
            } catch (error) {
                this.loading = false
                this.error = error
            }
        },
        async getDataNilaiTugasAkhir() {
            try {
                this.loading = true;
                const res = {
                    data: [
                        {
                            "grup": "Bimbingan Penulisan Oleh koordinator TA ",
                            "child": [
                                {
                                    "nama": "Revisi pasca sidang",
                                    "index": 1,
                                    "deskripsi": "Setelah menyelesaikan revisi pasca seminar, unggah berkas pada menu yang telah disediakan.."
                                },
                                {
                                    "nama": "Cek SmartTA",
                                    "index": 2,
                                    "deskripsi": "Gunakan Aplikasi SmartTa untuk memeriksa kesesuaian format dan kesalahan penulisan"
                                },
                                {
                                    "nama": "Bimbingan penulisan",
                                    "index": 3,
                                    "deskripsi": "Bimbingan penulisan dilakukan secara berkala sesuai dengan jadwal yang telah ditentukan bersama Koordinator TA"
                                }
                            ]
                        },
                        {
                            "grup": "Cek Similarity",
                            "child": [
                                {
                                    "nama": "Turnitin",
                                    "index": 4,
                                    "deskripsi": "Sebelum input nilai wajib simarity kurang dari 29% ya"
                                }
                            ]
                        },
                        {
                            "grup": "Input Nilai Sidang",
                            "child": [
                                {
                                    "nama": "Upload Berkas",
                                    "index": 5,
                                    "deskripsi": "Silahkan unggah berkas yang sudah kamu selesaikan ke sitasi"
                                },
                                {
                                    "nama": "Verifikasi Berkas",
                                    "index": 6,
                                    "deskripsi": "berkas akan diverifikasi oleh admin, jika berkas sesuai maka akan dilanjutkan ke tahap berikutnya"
                                },
                                {
                                    "nama": "Input Nilai",
                                    "index": 7,
                                    "deskripsi": "Penginputan Nilai dilakukan pada sistem sitasi yang terintegrasi dengan iRaise"
                                }
                            ]
                        },
                    ]
                }
                if (res.data) {
                    this.nilaiTaData = res.data;
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
