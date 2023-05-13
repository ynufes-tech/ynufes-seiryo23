<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

const sponsors = [
  {
    link: "https://www.sotetsu-joinus.com/",
    image: "/sponsors/JOINUS.webp",
  },
  {
    link: "https://www.hazawa-kubotaganka.com/",
    image: "/sponsors/KUBOTA.webp",
  },
  {
    link: "https://www.next-gears.net/",
    image: "/sponsors/next-gears.webp",
  },
];
sponsors.sort(() => Math.random() - 0.5);
// copy and double sponsors
sponsors.push(...sponsors);
</script>

<template>
  <swiper
    :slides-per-view="1.5"
    :centered-slides="true"
    :space-between="10"
    :modules="[Autoplay]"
    :autoplay="{
      delay: 10000,
      disableOnInteraction: false,
    }"
    :loop="true"
  >
    <swiper-slide v-for="s in sponsors">
      <a :href="s.link" rel="noreferrer noopener" target="_blank">
        <img :src="s.image" />
      </a>
    </swiper-slide>
  </swiper>
</template>

<style scoped lang="scss">
.swiper {
  margin: 30px auto;
  width: min(90vw, 400px);
}

.swiper-slide {
  width: 100%;
  aspect-ratio: 3;
  border-radius: 10px;
  background: white;

  img {
    height: 100%;
    aspect-ratio: 3;
    background: white;
    object-fit: contain;
  }
}
</style>
