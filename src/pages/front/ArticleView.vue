<template>
  <div id="New">
    <div class="row">
        <div class="col-12">
          <h1 class="text-center">{{ New.name }}</h1>
        </div>
        <div class="col-12">
            <img :src="New.image">
        </div>
        <div class="col-12">
            <div v-html="New.description"></div>
        </div>
        <div class="col-12">
            <q-form @submit="submitCart">
                <q-input  v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]"></q-input>
                <!-- <q-btn type="submit" color="primary">加入購物車</q-btn> -->
            </q-form>
        </div>
    </div>
      <div class="align-center justify-center text-center" persistent="persistent" :model-value="!New.sell" >
          <!-- <h1 class="text-red">已下架</h1> -->
          <q-btn @click="router.go(-1)">回上頁</q-btn>
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

const New = reactive({
  _id: '',
  name: '',
  description: '',
  image: '',
  sell: true,
  category: ''
})

const submitCart = () => {
  if (!valid.value) return
  editCart({ _id: New._id, quantity: quantity.value })
}

(async () => {
  try {
    const { data } = await api.get('/news/' + route.params.id)
    New._id = data.result._id
    New.name = data.result.name
    New.description = data.result.description
    New.image = data.result.image
    New.sell = data.result.sell
    New.category = data.result.category

    document.title = '購物網 | ' + New.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', New.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得文章失敗'
    })
    router.go(-1)
  }
})()
</script>
