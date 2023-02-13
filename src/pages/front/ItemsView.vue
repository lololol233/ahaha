<style scoped>
</style>

<template>
<div class="col-12 ">
            <h3 class="title">Items</h3>
        </div>
<div class="row"  style="margin: 20px 150px;">
  <div class="col-12 col-lg-3 col-md-4 col-sm-6" v-for="product in products" :key="product._id">
            <ProductCard v-bind="product"></ProductCard>
        </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import ProductCard from '@/components/ProductCard.vue'

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>
