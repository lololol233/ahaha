<style scopped>
html,
body {
  position: relative;
  height: 100%;
}

body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 450px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>

<template>
  <div class="col-12">
    <h3 class="title">Reading</h3>
  </div>
  <swiper
    :effect="'coverflow'"
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><router-link class="text-primary" to="/karamazov"><img
        src="\src\img\book\book1 300x450.png" /></router-link></swiper-slide
    ><swiper-slide
      ><img
        src="\src\img\book\book5.png" /></swiper-slide
    ><swiper-slide
      ><img
        src="\src\img\book\book6.png" /></swiper-slide
    ><swiper-slide
      ><img
        src="\src\img\book\book7.png" /></swiper-slide
    ><swiper-slide
      ><img
        src="\src\img\book\book8.png" /></swiper-slide
    ><swiper-slide
      ><img src="\src\img\book\book9.png"
    /></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCoverflow, Pagination, Navigation]
    }
  }
}
</script>
