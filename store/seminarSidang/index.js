import { defineStore } from 'pinia'

import {
    axiosSitasiGet
} from '../../composables/useAxios.js'

export const useSeminarSidang = defineStore('seminar-sidang', {
    //a function that returns a fresh state
    state: () => ({
        data: [],
        loading: false,
        error: '',
        message: '',

    }),
    actions: {
        async getData() {
            try {
                this.loading = true
                this.errorDetail = ''
                // const res = await axiosSitasiGet(`/seminar-sidang/list`)
                const res = {
                    data: {
                        "status": 1,
                        "rc": 200,
                        "message": "Data Found",
                        "data": [
                            {
                                "id_seminar": "656ebeecea831",
                                "nim": "12050310496",
                                "nama": "AKHIRIL ANWAR  HARAHAP",
                                "jam": "10:00 - 11:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "6536b1c22565a",
                                "nim": "11950311576",
                                "nama": "REZKY ALFAKHRI",
                                "jam": "10:00 - 11:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "656dc8dfc6a5a",
                                "nim": "12050313240",
                                "nama": "M. Haikel Oksama",
                                "jam": "08:00 - 09:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "655e26970f401",
                                "nim": "12050314864",
                                "nama": "MUHAMMAD FAUZI FAYYAD",
                                "jam": "09:00 - 10:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "655dd54ad4faf",
                                "nim": "12050320393",
                                "nama": "Dwi Sri Rahayu",
                                "jam": "08:00 - 09:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "6568837d45798",
                                "nim": "12050322811",
                                "nama": "QHAIRANI FRILLA F SAFIESZA",
                                "jam": "13:00 - 14:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "6568d01dd5558",
                                "nim": "12050320473",
                                "nama": "Nursafika",
                                "jam": "14:00 - 15:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "6550d2b22f713",
                                "nim": "12050320348",
                                "nama": "Margareta Amalia MP",
                                "jam": "11:00 - 12:00",
                                "tanggal": "2023-12-26",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "65681b8026931",
                                "nim": "11950313349",
                                "nama": "ABDI PUTRA ASMAN",
                                "jam": "10:00 - 11:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "656edc98d4291",
                                "nim": "12050312502",
                                "nama": "REIZA KHAIRI HELMI",
                                "jam": "14:00 - 15:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "656d354c45583",
                                "nim": "12050320499",
                                "nama": "Ma'idatul Fitriah",
                                "jam": "10:00 - 11:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "656da0366e0a7",
                                "nim": "12050320331",
                                "nama": "Luna Aliska Giopani",
                                "jam": "13:00 - 14:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "656d33ecc353b",
                                "nim": "12050320459",
                                "nama": "Qurotul A Yuniyah",
                                "jam": "09:00 - 10:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1A",
                                "jenis": "Seminar"
                            },
                            {
                                "id_seminar": "6569ce7fb235b",
                                "nim": "11950314582",
                                "nama": "BOBY ANDIKA PUTRA",
                                "jam": "08:00 - 09:00",
                                "tanggal": "2023-12-22",
                                "ruangan": "Gedung Baru Lt.1B",
                                "jenis": "Sidang"
                            }
                        ],
                        "ts": 1703053353
                    }
                }
                if (res.data.status) {
                    this.data = res.data.data
                } else {
                    this.error = res.data.message
                }
                this.loading = false
            } catch (error) {
                this.loading = false
                this.error = error
            }
        },
    }
})
