<template>
  <h3 class="title">Create Account</h3>
  <div class="q-pa-md" style="max-width: 800px">
    <q-form
      @reset="onReset"
      class="q-gutter-md"
      @submit="register"
    >
    <q-input
        filled
        v-model="form.email"
        label="Your email *"
        hint="enter Email"
        :rules="[rules.email, rules.required]"
      />
      <q-input
        filled
        v-model="form.account"
        label="Your account *"
        hint="account > 4 <15"
        :rules="[rules.required, rules.length]"
      />

      <q-input
        filled
        type="password"
        v-model="form.password"
        label="Your password *"
        :rules="[rules.required, rules.length]"
      />

      <q-input
      type="password"
      v-model="form.passwordConfirm"
      hint="Password with toggle"
      label="Confirm your password *"
      :rules="[rules.required, rules.length, rules.passwordConfirm]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div>
        <q-btn label="Submit" type="submit" color="primary" :loading="loading"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
// import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import validator from 'validator'
import { api } from '@/boot/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

// const $q = useQuasar()

const router = useRouter()

const loading = ref(false)
const form = reactive({
  account: '',
  password: '',
  passwordConfirm: '',
  email: ''
})
const rules = {
  email (value) {
    return validator.isEmail(value) || '格式錯誤'
  },
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  },
  passwordConfirm (value) {
    return (value === form.password) || '密碼不一致'
  }
}

const register = async () => {
  loading.value = true
  try {
    await api.post('/users', form)
    await Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
  loading.value = false
}

const onReset = () => {
  form.email = null
  form.account = null
  form.password = null
}
</script>
