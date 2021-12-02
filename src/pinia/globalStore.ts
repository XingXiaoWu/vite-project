import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'globalStore',
    state: () => ({
        count: 0
    }),
    actions: {
        countPlus() {
            this.count++
        },
        countDel() {
            this.count--
        }
    }
})