<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    sectionTitle: string;
  }>(),
  {
    sectionTitle: "セクションタイトル",
  }
);
</script>

<template>
  <div class="tone-wrapper">
    <h2 class="section-title">{{ props.sectionTitle }}</h2>
    <div class="tone-1">&#9835; &#9833;</div>
    <div class="tone-2">&#9833;</div>
    <div class="tone-3">&#9839; &#9834;</div>
    <div class="tone-4">&#9834;</div>
  </div>
</template>

<style scoped lang="scss">
.tone-wrapper {
  width: fit-content;
  position: relative;

  .section-title {
    font-size: 32px;
    font-weight: bold;
  }

  .tone-1,
  .tone-2,
  .tone-3,
  .tone-4 {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -10px;
    font-size: 24px;
    font-weight: bold;
    animation: tone 2s infinite;
  }

  .tone-1 {
    animation-delay: 0.5s;
    color: #ecb2c6ff;
  }

  .tone-2 {
    animation-delay: 1s;
    color: #8dc0f5ff;
  }

  .tone-3 {
    animation-delay: 1.5s;
    color: #bbaae1ff;
  }

  .tone-4 {
    animation-delay: 2s;
    color: #ecb2c6ff;
  }

  @keyframes tone {
    0% {
      transform: scale(1) translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: scale(1.5) translate(50%, -50%);
    }
    80% {
      opacity: 0;
      transform: scale(1.5) translate(100%, -100%);
    }
    100% {
      transform: scale(1.5) translate(100%, -100%);
      opacity: 0;
    }
  }
}
</style>
