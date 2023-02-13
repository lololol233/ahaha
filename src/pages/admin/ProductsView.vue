<style scoped>
.col-10{
  margin: auto;
  margin-bottom: 20px;
}
</style>
<template>
  <div id="admin-products">
    <h2 class="title">商品管理</h2>
    <div class="row">
        <div class="col-10 mb-lg">
            <q-btn color="primary" @click="openDialog(-1)">新增商品</q-btn>
        </div>
        <!-- Quasar範例 -->
        <div class="col-10">
          <q-table :rows="products" :columns="columns">
          </q-table>
        </div>
        <!-- 雅嵐範例 -->
        <q-table :rows="filterData" :columns="columns" row-key="_id">
          <template v-slot:body-cell-image="props">
        <q-td>
          <img :src="props.row.image" style="height: 100px" />
        </q-td>
    </template>
    <template v-slot:body-cell-sell="props">
        <q-td>
            <q-icon class="btn-size" :name="props.row.sell? 'fa-solid fa-face-smile': 'fa-solid fa-face-dizzy'"></q-icon>
        </q-td>
    </template>
    <template v-slot:body-cell-edit="props">
        <q-td>
            <q-btn round="round" @click="openAdd(filterData.findIndex(item =&gt; item._id === props.row._id ))" icon="fa-solid fa-pen-to-square"></q-btn>
        </q-td>
    </template>
        </q-table>
        <!-- 老師範例 -->
        <!-- <div class="col-12">
            <table>
                <thead>
                    <tr>
                        <th>圖片</th>
                        <th>名稱</th>
                        <th>管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, idx) in products" :key="product._id">
                        <td>
                            <q-img :src="product.image" :aspect-ratio="1" :width="200"></q-img>
                        </td>
                        <td>{{ product.name }}</td>
                        <td>
                            <q-btn color="primary" variant="text" @click="openDialog(idx)"><q-icon name="build" color="white"></q-icon></q-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> -->
    </div>
  </div>
  <q-dialog v-model="form.dialog" persistent>
    <q-card>
            <q-form @submit="submit">
              <q-card-title>
                  <h3 class="text-center">{{ form._id.length > 0 ? '編輯商品' : '新增商品' }}</h3>
              </q-card-title>
              <q-card-text>
                  <div class="row">
                      <div class="col-12">
                          <q-input v-model="form.name" type="text" label="名稱" :rules="[rules.required]"/>
                      </div>
                      <div class="col-12">
                          <q-input v-model="form.price" type="number" label="價格" :rules="[rules.required, rules.price]"/>
                      </div>
                      <div class="col-12">
                          <q-input v-model="form.description" rows="3" auto-grow="auto-grow" label="說明" :rules="[rules.required]"/>
                      </div>
                      <div class="col-12">
                          <q-select v-model="form.category" :options="categories" :rules="[rules.required]" label="種類"></q-select>
                      </div>
                      <div class="col-12">
                        <q-file v-model="form.image" label="Pick Images" filled append accept=".jpg, image/*" @rejected="onRejected">
                          <template v-slot:prepend>
                          <q-icon name="image" />
                        </template>
                        </q-file>
                      </div>
                      <div class="col-12">
                          <q-checkbox v-model="form.sell" label="上架"></q-checkbox>
                      </div>
                      <div class="col-12">
                          <!-- <v-image-input class="mx-auto" v-model="form.image" removable="removable" :max-file-size="1"></v-image-input> -->

                      </div>
                  </div>
              </q-card-text>
              <q-card-actions>
                  <q-btn :disabled="form.loading" cocolor="primary" v-close-popup>取消</q-btn>
                  <q-btn :disabled="form.loading" color="primary" type="submit">送出</q-btn>
              </q-card-actions>
            </q-form>
          </q-card>
  </q-dialog>
</template>

<script setup>
import { apiAuth } from '@/boot/axios'
import { reactive } from 'vue'
import Swal from 'sweetalert2'
// const columns = [
//   {
//     name: 'name',
//     label: 'Name',
//     field: products => products.name,
//     align: 'center'
//   },
//   {
//     name: 'id',
//     label: 'ID',
//     field: products => products._id,
//     align: 'center'
//   },
//   {
//     name: 'price',
//     label: '金額',
//     field: products => products.price,
//     align: 'center'
//   },
//   {
//     name: 'product',
//     label: '商品',
//     field: orders => orders.products[0],
//     align: 'center'
//   }
// ]
const categories = ['書', '明信片', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  price (value) {
    return value >= 0 || '價格錯誤'
  }
}

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.loading = false
    form.idx = -1
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.loading = false
    form.idx = idx
  }
  form.dialog = true
}

const submit = async () => {
  form.loading = true

  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('price', form.price)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('sell', form.sell)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/products', fd)
      products.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/products/' + form._id, fd)
      products[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
    form.dialog = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  form.loading = false
}

(async () => {
  try {
    const { data } = await apiAuth.get('/products/all')
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
