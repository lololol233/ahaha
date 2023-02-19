<style scoped>
*{
  white-space: pre;
}
.col-10{
  margin: auto;
  margin-bottom: 20px;
}
</style>

<template>
  <div id="admin-news">
    <h2 class="title">Article Management</h2>
    <div class="row">
    <div class="col-12">
            <q-btn color="primary" @click="openDialog(-1)">Add Article</q-btn>
        </div>
          <!-- 雅嵐範例 -->
          <div class="col-10">
        <q-table :rows="news" :columns="columns" row-key="_id">
    <template v-slot:body-cell-image="props">
        <q-td>
          <img :src="props.row.image" style="height: 100px; width: 100px" />
        </q-td>
    </template>
    <!-- <template v-slot:body-cell-date="props">
        <q-td>
        </q-td>
    </template> -->
    <template v-slot:body-cell-edit="props">
        <q-td>
            <!-- <q-btn round="round" @click="openAdd(filterData.findIndex(item =&gt; item._id === props.row._id ))" icon="fa-solid fa-pen-to-square">
              <q-icon name="build"></q-icon>
            </q-btn> -->
            <q-btn round="round" @click="openDialog
            (news.findIndex(item=&gt;item._id === props.row._id))">
              <q-icon name="build"></q-icon>
            </q-btn>
        </q-td>
    </template>
        </q-table>
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
                          <q-input v-model="form.name" type="text" label="Title" :rules="[rules.required]"/>
                      </div>
                      <!-- <div class="col-12">
                          <q-input v-model="form.description" rows="3" auto-grow="auto-grow" label="說明" :rules="[rules.required]"/>
                      </div> -->
                      <div class="col-12">
                        <div class="q-pa-md q-gutter-sm">
                        <q-editor
                          v-model="form.description"
                          :dense="$q.screen.lt.md"
      :toolbar="[
        [
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            list: 'only-icons',
            options: ['left', 'center', 'right', 'justify']
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: true,
            options: ['left', 'center', 'right', 'justify']
          }
        ],
        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],
        ['print', 'fullscreen'],
        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: true,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

        ['undo', 'redo'],
        ['viewsource']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"
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
                          <q-checkbox v-model="form.post" label="Post"></q-checkbox>
                      </div>
                      <div class="col-12">
                          <!-- <v-image-input class="mx-auto" v-model="form.image" removable="removable" :max-file-size="1"></v-image-input> -->

                      </div>
                  </div>
              </q-card-text>
              <q-card-actions>
                  <q-btn :disabled="form.loading" color="primary" v-close-popup>Cancel</q-btn>
                  <q-btn :disabled="form.loading" color="primary" type="submit">Submit</q-btn>
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

const columns = [
  {
    name: 'name',
    label: 'Article Title',
    field: news => news.name,
    align: 'center'
  },
  {
    name: 'image',
    label: 'Image',
    field: news => news,
    align: 'center'
  },
  {
    name: 'date',
    label: 'Post Date',
    field: news => new Date(news.date).toLocaleDateString(),
    align: 'center'
  },
  {
    name: 'edit',
    label: 'Edit',
    field: news => news,
    align: 'center'
  }
]
const $q = useQuasar()
// const editor = ref(
//   'After you define a new button,' +
//         ' you have to make sure to put it in the toolbar too!'
// )

// const saveWork = () => {
//   $q.notify({
//     message: 'Saved your text to local storage',
//     color: 'green-4',
//     textColor: 'white',
//     icon: 'cloud_done'
//   })
// }
// const uploadIt = () => {
//   $q.notify({
//     message: 'Server unavailable. Check connectivity.',
//     color: 'red-5',
//     textColor: 'white',
//     icon: 'warning'
//   })
// }

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
