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
        log: []
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
                this.error = error
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
                this.error = error
            }
        }
    }
})
