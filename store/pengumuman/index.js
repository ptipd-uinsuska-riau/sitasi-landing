import { defineStore } from 'pinia'

import {
    axiosSitasiPost
} from '../../composables/useAxios.js'

export const useSubmission = defineStore('submission', {
    //a function that returns a fresh state
    state: () => ({
        data: [],
        loading: false,
        error: '',
        message: '',
        total_pages: ''
    }),

    actions: {
        async getData(payload) {
            try {
                this.loading = true
                this.errorDetail = ''
                const res = await axiosSitasiPost(`/submission/list`, {
                    ...payload
                })

                // console.log(res.data.data.total_pages);

                if (res.data.status) {
                    this.data = res.data.data
                } else {
                    this.error = res.data.message
                }
                this.loading = false
            } catch (error) {
                this.loading = false
                if (error.response) {
                    // Respons diterima dengan status kesalahan
                    this.error = error.response.data.message || 'Terjadi kesalahan pada server.';
                } else if (error.request) {
                    // Tidak ada respons dari server
                    console.error('Tidak dapat terhubung ke server:', error.message);
                    this.error = 'Tidak dapat terhubung ke server. Silakan coba lagi nanti.';
                } else {
                    // Kesalahan lainnya
                    console.error('Terjadi kesalahan:', error.message);
                    this.error = 'Terjadi kesalahan. Silakan coba lagi nanti.';
                }
            }
        },
    }
})
