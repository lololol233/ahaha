<style>
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
</style>
<style scopped>
#product{
  width: 70%;
  margin: auto;
}
.product-title{
  font-family: 'Teko';
}
.col-6{
  margin: auto;
}
.product-img{
  width: 450px;
  height: 450px;
  overflow: hidden;
}
.product-img img:hover{
  transform: scale(1.1);
  transition: all 0.5s ease-out;
}
</style>

<template>
  <div id="product">
    <div class="row ">
        <div class="col-12">
          <h3 class="text-center product-title">{{ product.name }}</h3>
          <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="product-img">
            <img :src="product.image">
          </div>
          </div>

        <div class="col-lg-6 col-sm-12">
          <h4>${{ product.price }}</h4>
          <div v-html="product.description"></div>
        </div></div>
        <div class="col-12">
            <q-form @submit="submitCart">
                <q-input  v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]"></q-input>
                <q-btn type="submit" color="primary">Add Cart</q-btn>
            </q-form>
        </div>
      </div>
    </div>
      <div class="align-center justify-center text-center" persistent="persistent" :model-value="!product.sell" >
          <!-- <h1 class="text-red">已下架</h1> -->
          <q-btn @click="router.go(-1)" style="margin-bottom: 3rem;">Go Back</q-btn>
      </div>
  </div>
</template>

<script setup>

import { reactive, ref } from 'vue'
import { api } from '@/boot/axios'
import { useRoute, useRouter } from 'vue-router'
import { Swal } from 'sweetalert2'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart } = user

const valid = ref(false)
const quantity = ref(0)

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  number (value) {
    return value > 0 || '數量錯誤'
  }
}

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (!valid.value) return
  editCart({ _id: product._id, quantity: quantity.value })
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = 'Dostoevsky | ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()
</script>
