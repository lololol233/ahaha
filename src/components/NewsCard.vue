<style scopped>
.card-news{
  padding: 3rem;
  width: 50vw;
}
</style>

<template>
  <div class="q-pa-lg row">
  <q-card class="card-news">
    <div class="text-h4">
        <router-link class="text-primary" :to="'/news/' + _id">{{ name }}</router-link>
  </div>
  <div class="text-h6">
    {{ new Date(date).toLocaleDateString() }}
  </div>
  <div class="text-h6">
    文章分類:{{ category }}
  </div>
    <img :src="image">
    <!-- <div class="text-h6">
        <p class="pre">{{ description }}</p>
        <div v-html="description"></div>
    </div> -->
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
  },
  date: {
    type: Date,
    default: Date.now
  }
})

</script>
