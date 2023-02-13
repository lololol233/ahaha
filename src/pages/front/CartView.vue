<template>
<div id="cart">
  <div class="row">
    <div class="col-12">
      <h3 class="title">購物車</h3>
    </div>
    <!-- Quasar範例 -->
    <div class="col-10">
      <q-table :rows="cart" :columns="columns">
      </q-table>
    </div>
    <!-- 老師範例 -->
    <div class="col-12">
      <table>
        <thead>
          <tr>
            <th>圖片</th>
            <th>名稱</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, idx) in cart" :key="product._id" :class="{'bg-red': !product.p_id.sell}">
            <td>
              <img :aspect-ratio="1" :width="200" :src="product.p_id.image">
            </td>
            <td>{{ product.p_id.name }}</td>
            <td>{{ product.p_id.price }}</td>
            <td>
              <q-btn color="primary" @click="updateCart(idx, -1)">-</q-btn>&nbsp;{{ product.quantity }}&nbsp;
              <q-btn color="primary" @click="updateCart(idx, 1)">+</q-btn>
            </td>
            <td>{{ product.quantity * product.p_id.price }}</td>
            <td>
              <q-btn color="red" @click="updateCart(idx, product.quantity*-1)">刪除</q-btn>
            </td>
          </tr>
          <tr v-if="cart.length === 0">
            <td class="text-center" colspan="6">沒有商品</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12 text-center">

      <!-- <q-btn color="green" :disabled="!canCheckout" @click="onCheckoutBtnClick">
        結帳
        <td class="text-center" colspan="6">沒有商品</td>
      </q-btn> -->
      <div class="col-12 text-center">
        <p>總金額 {{ totalPrice }}</p>
        <q-btn color="accent" :disabled="!canCheckout" @click="onCheckoutBtnClick">結帳</q-btn>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'
import { apiAuth } from '@/boot/axios'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const user = useUserStore()
const { editCart, checkout } = user

const cart = reactive([])

const updateCart = async (idx, quantity) => {
  await editCart({ _id: cart[idx].p_id._id, quantity })
  cart[idx].quantity += quantity
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1)
  }
}

const onCheckoutBtnClick = async () => {
  await checkout()
  router.push('/orders')
}

const totalPrice = computed(() => {
  return cart.reduce((total, current) => {
    return total + (current.p_id.price * current.quantity)
  }, 0)
})

const canCheckout = computed(() => {
  return cart.length > 0 && !cart.some(product => {
    return !product.p_id.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    cart.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得購物車失敗'
    })
  }
})()
</script>
