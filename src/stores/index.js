import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import persistedstate from 'pinia-plugin-persistedstate'

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  pinia.use(persistedstate)
  return pinia
})
