<style>
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
</style>
<style scopped>
.card-news{
  padding: 3rem;
  width: 52vw;
}
.news-title{
  font-family: 'Teko';
  font-size: 3rem;
  color:black;
}
.cards-img{
  overflow: hidden;
}
.cards-img img:hover{
  filter: brightness(80%);
  transition: all 0.5s ease-out;
  transform: scale(1.1);
}

@media screen and (max-width: 908px){
  .card-news{
  padding: 3rem;
  width: 90vw;
}
.cards-img img{
  width: 80vw;
}
}
</style>

<template>
  <div class="q-pa-lg row">
  <q-card class="card-news">
    <div class="text-h4">
        <router-link class="news-title" :to="'/news/' + _id">{{ name }}</router-link>
  </div>
  <div class="text-h6">
    {{ new Date(date).toLocaleDateString() }}
  </div>
  <div class="text-h6">
    Category:{{ category }}
  </div>
  <router-link :to="'/news/' + _id">
    <div class="cards-img">
      <img :src="image">
    </div>
  </router-link>

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
