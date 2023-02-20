<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
</style>
<style>
body{
  background-color: var(--secondary);
}
.logo-text{
  margin: 1rem 0;
  /* font-family: 'Teko'; */
  /* font-family: 'Shantell Sans', cursive; */
  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Arimo', sans-serif; */
/* font-family: 'Josefin Sans', sans-serif; */
font-family: 'Dancing Script', cursive;
  color: white;
  font-size: 2.5rem;
}
.bg-primary {
  background-color: black !important;
  display: flex;
}
</style>

<template>
  <q-layout class="layout" view="hHh lpR fFf">

    <q-header class="bg-primary text-secondary h1" height-hint="98">
      <!-- <q-toolbar>
        <q-toolbar-title >
          <q-avatar>
            <img src="../../img/home/LOGO-01.png">
          </q-avatar>
          Dostoevsky Library
        </q-toolbar-title>
      </q-toolbar> -->
      <q-toolbar>
            <img src="./../assets/img/home/LOGO-01.png" style="width: 80px;">
          <span class="logo-text">Dostoevsky Library</span>
      </q-toolbar>

      <q-tabs align="right" class="bar">
        <q-route-tab to="/home" label="Home" />
        <q-route-tab to="/news" label="Articles" />
        <q-route-tab to="/reading" label="Reading" />
        <q-route-tab to="/items" label="Products" />
        <q-route-tab v-if="isLogin" to="/orders" label="Orders" />
        <q-route-tab v-if="isLogin" to="/cart" label="Cart">
          <q-badge :label="cart" color="accent" floating rounded></q-badge>
        </q-route-tab>
        <q-route-tab v-if="!isLogin" to="/register" label="Sign up" />
        <q-route-tab v-if="!isLogin" to="/login" label="Login" />
        <q-route-tab v-if="isLogin && isAdmin" to="/admin" label="Admin" />
        <q-route-tab v-if="isLogin" @click="logout" label="Logout" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
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
