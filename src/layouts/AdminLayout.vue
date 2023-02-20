<style scoped>
.logo-text{
  margin-top: 1rem;
  font-family: 'Teko';
  color: white;
  font-size: 3rem;
}
.bg-primary{
  background-color: black;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-secondary h1" height-hint="98">
      <q-toolbar>
        <img src="./../assets/img/home/logo-01.png" style="width: 80px;">
          <span class="logo-text">Management Center</span>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/admin/news" label="Article-Manage" />
        <q-route-tab to="/admin" label="Products-Manage" />
        <q-route-tab to="/admin/orders" label="Order-Manage" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
  <footer>
      <div class="footer"><p>© 2023 Dostoevsky Library. All rights reserved.</p></div>
    </footer>
</template>

<script setup>
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'

// const user = useUserStore()
// const { avatar, account } = storeToRefs(user)
</script>
