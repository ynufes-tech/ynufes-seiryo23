<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";

interface Props {
  imageList?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  imageList: () => [""],
});
</script>

<template>
  <swiper
    :modules="[Pagination, Autoplay, Navigation]"
    :pagination="{ clickable: true }"
    :autoplay="true"
    :loop="true"
    :space-between="10"
    :centered-slides="true"
    :navigation="true"
    class="the-carousel"
  >
    <swiper-slide v-for="image in imageList" :key="image"
      ><img :src="image" class="swiper-image"
    /></swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.swiper {
  width: 90%;
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
}
@media screen and (min-aspect-ratio: 5/7) and (min-width: 600px) {
  .swiper {
    width: 80%;

    .swiper-slide {
      display: flex;
      justify-content: center;
      min-width: 100%;
      box-sizing: border-box;
      padding: 10px;

      .swiper-image {
        border-radius: 30px;
        width: 100%;
      }
    }
  }
}
</style>
