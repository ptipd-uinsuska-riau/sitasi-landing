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
                this.error = error
            }
        },
    }
})
