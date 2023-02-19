<style>
@import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
</style>
<style lang="scss" scoped>
// 返回頂部
#myBtn {
  width: 4rem;
  height: 5rem;
  font-size: 2rem;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: #688982;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 5px;
}

#myBtn:hover {
  background-color: #cea861;
}
// timeline example
.section05 {
    background-color: #202221;
    min-height: 62rem;
    margin: 0;
    font-family: "Droid Sans", sans-serif;
  }
  .section05 .text-h3{
    color: white;
    padding-top: 5rem;
  }
  .section05:before {
    content: "";
    position: absolute;
    // top: 0px;
    margin: 9rem 0;
    left: 50%;
    // bottom: 0px;
    transform: translateX(-50%);
    width: 4px;
    height: 800px;
    background-color: #fff;
  }
  .entries {
    width: calc(100% - 80px);
    max-width: 800px;
    margin: auto;
    position: relative;
    left: -5px;
  }
  .entries .entry {
    width: calc(50% - 80px);
    float: left;
    padding: 20px;
    clear: both;
    text-align: right;
  }
  .entries .entry:not(:first-child) {
    margin-top: -60px;
  }
  .entries .entry .title {
    font-size: 32px;
    margin-bottom: 12px;
    position: relative;
    color: #fff;
  }
  .entries .entry .title:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border: 4px solid #fff;
    background-color: #1d1d1d;
    border-radius: 100%;
    top: 50%;
    transform: translateY(-50%);
    right: -112px;
    z-index: 1000;
  }
  .entries .entry .title.big:before {
    width: 24px;
    height: 24px;
    transform: translate(8px, -50%);
  }
  .entries .entry .body {
    color: #aaa;
  }
  .entries .entry .body p {
    line-height: 1.4em;
  }
  .entries .entry:nth-child(2n) {
    text-align: left;
    float: right;
  }
  .entries .entry:nth-child(2n) .title:before {
    left: -103px;
  }
  .entries .entry:nth-child(2n) .title.big:before {
    transform: translate(-8px, -50%);
  }
// timeline example end
#section01 {
  height: 50vh;
  font-size: 3rem;
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 10% 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-img{
  border-radius: 50%;
}
.carousel{
  width: 70vw;
  margin: auto;
}
.section01,
.section04-card{
width: 70vw;
margin: auto;
}
@media (max-width: 560px){
  .section01{
    width: 100vw;
    margin: auto;
  }
  .label{
    display: none;
  }
  .section05 {
    height: 1700px;
  }
  .section05:before {
    height: 1500px;
  }
}
.section01 p{
  font-size: 1rem;
  line-height: 2rem;
}
.left{
  padding: 5rem;
  font-size: 1rem;
}
.text-h3{
  text-align: center;
  font-family: 'Teko';
}
.section02, .section04{
  padding: 5rem;
}
// 評論
.comment{
  width: 40rem;
}
footer{
  height: 5rem;
  background-color: black;
  color: white;
  font-size: 1rem;
  text-align: center;
}
#section {
      height: 90vh;
      font-size: 3rem;
      color: white;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      display: flex;
      justify-content: end;
    }
.my-card img:hover{
  cursor: pointer;
  filter: brightness(50%);
  transition: all 0.5s ease-out;
}
// 元素出现效果
.my-card:hover .label{
  opacity: 1;
  z-index: 10;
  transition: all 0.5s ease-out;
}

.label{
  width: 12rem;
  height: 7rem;
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
// footer
.footer{
  width: 100vw;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.typing {
    color: white;
    font-size: 3.5rem;
    width: 20em;
    height: 1.5em;
    border-right: 1px solid transparent;
    animation: typing 2s steps(42, end), blink-caret .75s step-end infinite;
    font-family: 'Dancing Script', cursive;
    word-break: break-all;
    overflow: hidden;
}
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 12em;
    }
}
.typing-area{
  width: 50%;
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 光标 */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: currentColor;
    }
}
</style>
<template>
  <!-- 返回頂部 -->
  <button onclick="toTop" id="myBtn">▲</button>
  <section id="section">
    <div class="typing-area"><div class="typing">One of the greatest writer in the world.</div></div>
    <!-- <p class="text-h3">If a seed of grain does not go into the earth and come to an end, it is still a seed and no more; but through its death it gives much fruit.</p> -->
  </section>
  <section id="section02">
  </section>
  <h3 class="text-h3">About Dostoevsky</h3>
    <div class="row section01">

      <div class="col-lg-6 col-md-12 left">
        <p>Fyodor Mikhailovich Dostoevsky(Russian: Фёдор Михайлович Достоевский; 11 November 1821 – 9 February 1881), sometimes transliterated as Dostoyevsky, was a Russian novelist, short story writer, essayist and journalist. Dostoevsky's literary works explore the human condition in the troubled political, social, and spiritual atmospheres of 19th-century Russia, and engage with a variety of philosophical and religious themes. His most acclaimed novels include Crime and Punishment (1866), The Idiot (1869), Demons (1872), and The Brothers Karamazov (1880). His 1864 novella, Notes from Underground, is considered to be one of the first works of existentialist literature. Numerous literary critics regard him as one of the greatest novelists in all of world literature, as many of his works are considered highly influential masterpieces.</p>
        <p>
          Dostoevsky's body of work consists of thirteen novels, three novellas, seventeen short stories, and numerous other works. His writings were widely read both within and beyond his native Russia and influenced an equally great number of later writers including Russians such as Aleksandr Solzhenitsyn and Anton Chekhov, philosophers Friedrich Nietzsche and Jean-Paul Sartre, and the emergence of Existentialism and Freudianism. His books have been translated into more than 170 languages, and served as the inspiration for many films.
        </p>
      </div>
      <div class="col-lg-6 col-md-12 right order-first">
        <q-img src="\src\img\home\dosto4.jpg" alt="" style="width: 600px;"></q-img>
      </div>
    </div>
    <!-- Timeline example -->
    <section class="section05">
      <div class="col-12">
        <h3 class="text-h3">Chronology</h3>
      </div>
      <div class="entries">
        <div class="entry">
          <div class="title">1821</div>
          <div class="body">
            <p>
              Born in Moscow on October 30 (November 11 according to the Gregorian Calendar).
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1838</div>
          <div class="body">
            <p>
              admitted to St. Petersburg Academy of Military Engineers as an army cadet.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1846</div>
          <div class="body">
            <p>
              publication of 1st novel Poor Folk, The Double (appearing 2 weeks later), and Mr. Prokharchin.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1849</div>
          <div class="body">
            <p>
              arrested for alleged political crimes along with other Petrashevsky Circle members servitude in Siberia.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1866</div>
          <div class="body">
            <p>
              publishes “Crime and Punishment” and “The Gambler”.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1879</div>
          <div class="body">
            <p>
              publishes first part of “The Brothers Karamazov”.
            </p>
          </div>
        </div>
        <div class="entry">
          <div class="title">1881</div>
          <div class="body">
            <p>dies in St. Petersburg on January 28 at the age of 59 due to a lung hemorrhage.</p>
          </div>
        </div>
      </div>
    </section>
<!-- Timeline examlple end -->
    <div class="q-pa-md section03">
    <div class="q-gutter-md">
      <div class="col-12"><h3 class="text-h3">What people say</h3></div>
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="black"
        navigation
        padding
        arrows
        height="350px"
        class="shadow-1 rounded-borders carousel"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center slide">
          <img class="slide-img" src="\src\img\home\comment1.png" alt="">
          <div class="q-mt-md text-center">
            <p class="comment">“Whoever you are, you are the vessel of this perplexed liquid, this cloudy, yeasty, precious stuff, the soul. The soul is not restrained by barriers. It overflows, it floods, it mingles with the souls of others.”</p>
          </div>
          <div class="text-h6">Virginia Woolf</div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img class="slide-img" src="\src\img\home\comment2.png" alt="">
          <div class="q-mt-md text-center">
            <p class="comment">“Whoever you are, you are the vessel of this perplexed liquid, this cloudy, yeasty, precious stuff, the soul. The soul is not restrained by barriers. It overflows, it floods, it mingles with the souls of others.”</p>
            <div class="text-h6">Hermann Karl Hesse</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img class="slide-img" src="\src\img\home\comment3.png" alt="">
          <div class="q-mt-md text-center">
            <p class="comment">“Whoever you are, you are the vessel of this perplexed liquid, this cloudy, yeasty, precious stuff, the soul. The soul is not restrained by barriers. It overflows, it floods, it mingles with the souls of others.”</p>
            <div class="text-h6">William Somerset Maugham</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>

  <section class="row section04 bg-dark text-white">
      <div class="col-12"><h3 class="text-h3">Works</h3></div>
        <div class="q-pa-lg row items-start q-gutter-md section04-card">
    <q-card class="my-card">
      <img src="\src\img\book\book2.png">
      <div class="label">
        <p>1866</p>
        <p>Crime and Punishent</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book4.png">
      <div class="label">
        <p>1856</p>
        <p>White Nights</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book6.png">
      <div class="label">
        <p>1856</p>
        <p>White Nights</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book8.png">
      <div class="label">
        <p>1869</p>
        <p>The Idiot</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book9.png">
      <div class="label">
        <p>1872</p>
        <p>Devils</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book3.png">
      <div class="label">
        <p>1879</p>
        <p>Raw Youth</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book5.png">
      <div class="label">
        <p>1879</p>
        <p>Raw Youth</p>
      </div>
    </q-card>
    <q-card class="my-card">
      <img src="\src\img\book\book7.png">
      <div class="label">
        <p>1880</p>
        <p>Brothers Karamazov</p>
      </div>
    </q-card>
</div>
    </section>

    <footer>
      <div class="footer"><p>© 2023 Dostoevsky Library. All rights reserved.</p></div>
    </footer>
</template>

<script setup>
/* eslint-disable */
import { onMounted, onUnmounted } from 'vue'
import $  from 'jquery'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)

// 轉成陣列

const triggers = ScrollTrigger.getAll();
  onMounted(() => {
     // 執行 gsap 動畫
    const sections = gsap.utils.toArray('section')
// sections.forEach((section,index)=>{
//   section.style.backgroundImage=`url(https://picsum.photos/1920/1080/?random=${index})`
// })
// 返回頂部
window.onscroll = function() {scrollFunction()};
        function scrollFunction() {console.log(121);
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
          } else {
            document.getElementById("myBtn").style.display = "none";
          }
        }
  function topFunction() {
  document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  // window.scrollTo( 0, 1000 );
  const myBtn = document.getElementById('myBtn')
  myBtn.onclick = function toTop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

$('#section').css({
    backgroundImage: `url(src/img/home/dosto5.png)`,
  })

gsap.to('#section',{
  scrollTrigger: {
      trigger: section,
      start: "top 0%",
      end: "bottom 0%",
      scrub: true
    },
    backgroundPosition: `50% -400%`,
    ease: 'none'
})
const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section02',
        start: 'top 100%',
        end: 'bottom 100%',
        toggleActions: 'play reverse play reverse',
        scrub: 3,
        // markers: true
      },
      defaults: {
        duration: 2,
        ease: 'back'
      }
    })

    tl1
      .from('.main-title', {
        y: -100,
        opacity: 0
      })
      .from('.img01', {
        y: -2000,
      })
      .from('.txt01', {
        opacity: 0
      }, '-=0.5')
      .from('.img02', {
        x: 1000,
      }, '-=0.5')
      .from('.txt02', {
        opacity: 0
      }, '-=0.5')
      .from('.img03', {
        x: -1000,
      }, '-=0.5')
      .from('.txt03', {
        opacity: 0
      }, '-=0.5')
      .from('.img04', {
        x: 1000,
      }, '-=0.5')
      .from('.txt04', {
        opacity: 0
      }, '-=0.5')
    });
    onUnmounted(() => {
      triggers.forEach((trigger) => {
      // 把 ScrollTrigger 綁定的動畫消除
        trigger.kill();
      });
      // 消除綁定 MatchMedia();
      ScrollTrigger.clearMatchMedia();
    });
const slide =  ref('style')
const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'


</script>
