import { defineStore } from 'pinia'

import {
    axiosSitasiGet
} from '../../composables/useAxios.js'

export const useSubmission = defineStore('submission', {
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
                // const res = await axiosSitasiGet(`/submission/list`)
                const res = {
                    data: {
                        "status": 1,
                        "rc": 200,
                        "message": "Data Found",
                        "data": {
                            "data": [
                                {
                                    "id_submission": "65152de71a530",
                                    "nama": "Sofia Fulvi Intan",
                                    "nim": "12050322953",
                                    "sesi": "1",
                                    "tahun": "2023/2024",
                                    "topik": "Data Mining",
                                    "judul": "ANALISIS SENTIMEN MASYARAKAT TERHADAP PERPARKIRAN DI KOTA PEKANBARU MENGGUNAKAN TEXT MINING PADA TWITTER. (STUDI KASUS : DINAS PERHUBUNGAN KOTA PEKANBARU",
                                    "nilai": 35,
                                    "status": "Ditolak",
                                    "avatar": "https://drive.google.com/uc?id=1btJSKD6ibXQuaEVn5gYap-e55XuKcE36"
                                }
                            ],
                            "page": 1,
                            "total_pages": 790,
                            "limit": 1
                        },
                        "ts": 1703652583
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
