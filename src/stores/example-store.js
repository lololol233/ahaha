import { defineStore } from 'pinia'
// import { LocalStorage } from 'quasar'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment () {
      this.counter++
    }
  }
  // persis: {
  //   storage
  // }
})
