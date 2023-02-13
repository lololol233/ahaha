<style scoped>
*{
  white-space: pre;
}
</style>

<template>
  <div id="admin-news">
    <h2 class="title">文章管理</h2>
    <div class="row">
        <div class="col-12">
            <q-btn color="primary" @click="openDialog(-1)">新增文章</q-btn>
        </div>
        <div class="col-12">
            <table>
                <thead>
                    <tr>
                        <th>圖片</th>
                        <th>標題</th>
                        <th>管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(New, idx) in news" :key="New._id">
                        <td>
                            <img :src="New.image" :aspect-ratio="1" :width="200">
                        </td>
                        <td>{{ New.name }}</td>
                        <td>
                            <q-btn color="primary" variant="text" @click="openDialog(idx)"><q-icon name="build" color="white"></q-icon></q-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  <q-dialog v-model="form.dialog" persistent>
    <q-card>
            <q-form @submit="submit">
              <q-card-title>
                  <h3 class="text-center">{{ form._id.length > 0 ? '編輯文章' : '新增文章' }}</h3>
              </q-card-title>
              <q-card-text>
                  <div class="row">
                      <div class="col-12">
                          <q-input v-model="form.name" type="text" label="標題" :rules="[rules.required]"/>
                      </div>
                      <!-- <div class="col-12">
                          <q-input v-model="form.description" rows="3" auto-grow="auto-grow" label="說明" :rules="[rules.required]"/>
                      </div> -->
                      <div class="col-12">
                        <div class="q-pa-md q-gutter-sm">
                        <q-editor
                          v-model="form.description"
                          :definitions="{
                            save: {
                              tip: 'Save your work',
                              icon: 'save',
                              label: 'Save',
                              handler: saveWork
                            },
                            upload: {
                              tip: 'Upload to cloud',
                              icon: 'cloud_upload',
                              label: 'Upload',
                              handler: uploadIt
                            }
                          }"
                          :toolbar="[
                            ['bold', 'italic', 'strike', 'underline'],
                            ['upload', 'save']
                          ]"
                        />
                      </div>
                      </div>
                      <div class="col-12">
                          <q-select v-model="form.category" :options="categories" :rules="[rules.required]" label="分類"></q-select>
                      </div>
                      <div class="col-12">
                        <q-file v-model="form.image" label="Pick Images" filled append accept=".jpg, image/*" @rejected="onRejected">
                          <template v-slot:prepend>
                          <q-icon name="image" />
                        </template>
                        </q-file>
                      </div>
                      <div class="col-12">
                          <q-checkbox v-model="form.post" label="發布"></q-checkbox>
                      </div>
                      <div class="col-12">
                          <!-- <v-image-input class="mx-auto" v-model="form.image" removable="removable" :max-file-size="1"></v-image-input> -->

                      </div>
                  </div>
              </q-card-text>
              <q-card-actions>
                  <q-btn :disabled="form.loading" color="primary" v-close-popup>取消</q-btn>
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
import { useQuasar } from 'quasar'

const $q = useQuasar()
// const editor = ref(
//   'After you define a new button,' +
//         ' you have to make sure to put it in the toolbar too!'
// )

const saveWork = () => {
  $q.notify({
    message: 'Saved your text to local storage',
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done'
  })
}
const uploadIt = () => {
  $q.notify({
    message: 'Server unavailable. Check connectivity.',
    color: 'red-5',
    textColor: 'white',
    icon: 'warning'
  })
}

const categories = ['最新消息', '精采文章', '其他']
const rules = {
  required (value) {
    return !!value || '欄位必填'
  }
}

const news = reactive([])
const form = reactive({
  _id: '',
  name: '',
  description: '',
  image: undefined,
  post: false,
  category: '',
  loading: false,
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.description = ''
    form.image = undefined
    form.post = false
    form.category = ''
    form.loading = false
    form.idx = -1
  } else {
    form._id = news[idx]._id
    form.name = news[idx].name
    form.description = news[idx].description
    form.image = undefined
    form.post = news[idx].post
    form.category = news[idx].category
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
  fd.append('image', form.image)
  fd.append('description', form.description)
  fd.append('post', form.post)
  fd.append('category', form.category)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      news[form.idx] = data.result
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
    const { data } = await apiAuth.get('/news/all')
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
