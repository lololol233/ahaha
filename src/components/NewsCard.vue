<template>
  <div class="q-pa-md row items-start q-gutter-md">
  <q-card class="card-news">
    <img :src="image" width="400px">
    <div class="text-h4">
        <router-link class="text-primary" :to="'/news/' + _id">{{ name }}</router-link>

  </div>
    <div class="text-h6">
        <p class="pre">{{ description }}</p>
    </div>
</q-card></div>
</template>

<script setup>

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
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  post: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

</script>
