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
  }
}

</style>

<template>
  <div class="all">
<div class="left">
  <q-img src="src\assets\img\home\Dosto2.jpg"
          :ratio="1/1">
          <div class="absolute-bottom text-subtitle1 text-center">
            Photo of Dostoevsky
          </div></q-img>
</div>
  <div class="right">
    <h3 class="title">Login</h3>
    <p>Welcome to the Dostoevsky World</p>
<div class="form">
    <q-form
      @reset="onReset"
      class="q-gutter-md"
      @submit="login"
    >
    <div class="input">
      <q-input
      outlined
        v-model="form.account"
        label="Your account *"
        :rules="[rules.required, rules.length]"
      />

      <q-input class="input2"
      outlined
      v-model="form.password"
      type="password"
      label="Your password *"
      :rules="[rules.required, rules.length]">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
      <div>

        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml" />
        <q-btn label="login" type="submit" color="primary" :loading="loading" />
      </div>
    </q-form>
  </div>
  </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

const loading = ref(false)
const form = reactive({
  account: '',
  password: ''
})

const rules = {
  required (value) {
    return !!value || '欄位必填'
  },
  length (value) {
    return (value.length >= 4 && value.length <= 20) || '長度必須為 4 ~ 20 個字'
  }
}

const login = async () => {
  loading.value = true
  await user.login(form)
  loading.value = false
}

const onReset = () => {
  form.email = null
  form.account = null
  form.password = null
}
</script>
