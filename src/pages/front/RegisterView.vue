<style scoped>
.all{
  height: 100vh;
  width: 100vw;
  display: flex;
}
.right,
.left{
  width: 50vw;
  background-color: var(--secondary);
}
.left{
  height: 100vh;
  overflow: hidden;
}
.form{
  margin: auto;
  padding: 3rem;
  max-width: 35vw;
}
p{
  text-align: center;
  font-family: 'Roboto';
  font-size: 1.2rem;
  color: gray;
}
.q-btn{
  width: 30vw;
  height: 3rem;
  margin-bottom: 2rem;
  font-size: large;
  background-color: white;
}
@media screen and (max-width: 908px){
  .left{
    display:none;
  }
  .right{
    width: 100vw;
  }
  .q-btn,
  .form,
  .q-input{
    width: 70vw;
    display: flex;
    margin: 1rem;
  }
}

</style>
<template>
  <div class="all">
    <div class="left">
      <q-img src="../../assets/img/home/dosto.jpg"
          :ratio="1/1">
          <div class="absolute-bottom text-subtitle1 text-center">
            Photo of Dostoevsky
          </div></q-img>
    </div>
  <div class="right" style="max-width: 800px">
    <h3 class="title">Create Account</h3>
    <div class="form">
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
</div>
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
