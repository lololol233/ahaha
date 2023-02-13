<style>
body{
  background-color: var(--secondary);
}
</style>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header class="bg-primary text-secondary h1" height-hint="98">
      <q-toolbar>
        <q-toolbar-title >
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Dostoevsky Library
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="right">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/intro" label="Intro" />
        <q-route-tab to="/news" label="news" />
        <q-route-tab to="/reading" label="Reading" />
        <q-route-tab to="/items" label="Items" />
        <q-route-tab v-if="isLogin" to="/orders" label="Orders" />
        <q-route-tab v-if="isLogin" :content="cart" to="/cart" label="Cart" />
        <q-route-tab v-if="!isLogin" to="/register" label="Sign up" />
        <q-route-tab v-if="!isLogin" to="/login" label="Login" />
        <q-route-tab v-if="isLogin && isAdmin" to="/admin" label="Admin" />
        <q-route-tab v-if="isLogin" @click="logout" label="Logout" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated style="background-color:#202221; color:#f4ece1; text-align: center;font-size: 12px !important;">
        <q-toolbar>
          <q-toolbar-title>Dostoevsky@c</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
// import EssentialLink from 'components/EssentialLink.vue'

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

</script>
