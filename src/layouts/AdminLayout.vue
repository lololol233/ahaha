<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-secondary h1" height-hint="98">
      <q-toolbar>
        <q-toolbar-title >
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Dostoevsky
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/admin/news" label="news-Admin" />
        <q-route-tab to="/admin" label="Products-Admin" />
        <q-route-tab to="/admin/orders" label="Order-Admins" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'

// const user = useUserStore()
// const { avatar, account } = storeToRefs(user)
</script>
