<style scoped>
.card{
  margin: auto;
}
</style>

<template>
  <div class="row">
          <div class="col-12">
              <h3 class="title">Articles</h3>
          </div>
          <div class="card" v-for="New in news" :key="New._id">
              <NewsCard v-bind="New"></NewsCard>
          </div>
  </div>
  </template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import NewsCard from '@/components/NewsCard.vue'

const news = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/news')
    news.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
