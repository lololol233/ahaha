<style lang="scss" scoped>
*{
  background-color: #f4ece1;
  margin: 0;
  padding: 0
}
.q-pa-md{
  background-color: #202221;
  width: 100vw;
  height: 1000px;
}
.q-pa-md ::v-deep .q-carousel__arrow .q-icon {
    font-size: 100px !important;
}
</style>
<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      height="700px"
      margin="0"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="@/img/Dosto1.png" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>

</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const autoplay = ref(true)
</script>
