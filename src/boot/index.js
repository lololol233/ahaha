
// Plugins
import { loadFonts } from './webfontloader'
import router from './router'
import pinia from './pinia'
import { useUserStore } from '@/stores/user'
import VImageInput from 'vue3-img-input'
import '@/styles/main.sass'

export async function registerPlugins (app) {
  loadFonts()
  app.use(pinia)
  await useUserStore().getUser()
  app.use(router)
  app.component('VImageInput', VImageInput)
}
