<style scoped>
.text-h4,
.text-h6{
  font-family: 'Teko';
  margin-left: 0.5rem;
}
.card-product{
  overflow: hidden;
}
.card-product img:hover{
  transform: scale(1.1);
  transition: all 0.5s ease-out;
  filter: brightness(80%);
}

.label{
  width: 12rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: white;
  color: black;
  font-size: 1.5rem;
  font-family: 'Teko';
  opacity: 0;
  position: absolute;
  transform: translate(3rem,-18rem);
  margin: 0;
  text-align: center;
}
.product-img:hover >.label{
  opacity: 1;
  z-index: 10;
  transition: all 0.5s ease-out;

}
</style>

<template>
  <div class="q-pb-xl">
  <q-card class="card-product" flat style="width: 18rem; height: 31rem">
    <router-link class="text-primary" :to="'/products/' + _id">
      <img class="product-img" :src="image" style="width: 18rem; height: 20rem"></router-link>
      <div class="label">more</div>
      <div class="q-pa-md">
    <div class="text-h4">
      {{ name }}
    </div>
    <div class="text-h6">${{ price }}</div>
    <!-- <div class="text-h6">
        <p class="pre">{{ description }}</p>
    </div> -->
    <q-card-actions>
        <q-btn color="accent" @click="editCart({_id, quantity: 1})"><q-icon name="shopping_cart"></q-icon>Add Cart</q-btn>
    </q-card-actions></div>
</q-card>
</div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCart } = user
</script>
