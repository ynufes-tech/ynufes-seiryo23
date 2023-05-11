<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

interface Props {
  imageList?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  imageList: () => [""],
});
</script>

<template>
  <swiper
    :modules="[Pagination, Autoplay]"
    :pagination="{ clickable: true }"
    :autoplay="true"
    slides-per-view="auto"
    :loop="true"
    :space-between="10"
    :centered-slides="true"
  >
    <swiper-slide v-for="image in imageList" :key="image"
      ><img :src="image" class="swiper-image"
    /></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 900px;

  .swiper-image {
    border-radius: 30px;
    width: 100%;
  }
}
@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 600px) {
  .swiper-slide {
    display: flex;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;

    .swiper-image {
      border-radius: 30px;
      width: 100%;
    }
  }
}
</style>
