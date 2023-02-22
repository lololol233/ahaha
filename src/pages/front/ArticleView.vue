<style scoped>
#New{
  width: 1000px;
  margin: auto;
}
.col-6,
.col-8{
  margin: auto;
}
.none{
  display: none;
}
.word{
  margin: 3rem 0;
}
</style>

<template>
  <div id="New">
    <div class="row">
        <div class="col-12">
          <h4 class="text-center title">{{ New.name }}</h4>
        </div>
        <div class="col-12">
          <h6 class="text-center">Post Date：{{ new Date(New.date).toLocaleDateString() }}</h6>
        <!-- new Date(news.date).toLocaleDateString() -->
          <h6 class="text-center">Category：[{{ New.category }}]</h6>
        </div>
        <div class="col-8">
            <img :src="New.image">
        </div>
        <hr>
        <div class="word" v-html="New.description">
        </div>
        <div class="col-12">
            <q-form @submit="submitCart">
                <q-input  class="none" v-model.number="quantity" type="number" label="數量" :rules="[rules.required, rules.number]"></q-input>
                <!-- <q-btn type="submit" color="primary">加入購物車</q-btn> -->
            </q-form>
        </div>
    </div>
      <div class="align-center justify-center text-center" persistent="persistent" :model-value="!New.sell" >
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

const New = reactive({
  _id: '',
  name: '',
  description: '',
  image: '',
  sell: true,
  category: '',
  date: ''
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
    New.date = data.result.date

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
