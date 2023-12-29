import { defineStore } from 'pinia'

import {
    axiosPost,
    axiosGet
} from '../../composables/useAxios.js'

export const useAlumni = defineStore('alumni', {
    //a function that returns a fresh state
    state: () => ({
        data: [],
        loading: false,
        error: '',
        message: '',
        detail: {},
        loadingLog: false,
        errorLog: '',
        log: [],
        count: ''
    }),
    actions: {
        async getData(payload) {
            try {
                this.loading = true
                const res = await axiosPost('/alumni/list', {
                    ...payload
                })
                this.loading = false
                if (res.data.status) {
                    this.start = res.data.data.start
                    if (payload.mode === "next") {
                        this.data = this.data.concat(res.data.data.data)
                    } else {
                        this.data = res.data.data.data
                    }
                } else {
                    if (payload.mode === "next") {
                        this.data = []
                    }
                    this.error = res.data.message
                }
            } catch (error) {
                this.loading = false
                if (payload.mode !== 'next') {
                    this.data = []
                }
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
        async getDetail(payload) {
            try {
                this.loading = true
                this.errorDetail = ''
                const res = await axiosGet(`/alumni/` + payload)
                if (res.data.status) {
                    this.detail = res.data.data
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

        async getCount() {
            try {
                this.loading = true
                const res = await axiosGet(`/alumni/count/sif`)

                if (res.data.status) {
                    this.count = res.data.data
                } else {
                    this.error = res.data.message
                }
                this.loading = false
            } catch (error) {
                // Handle error here
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
        }
    }
})
