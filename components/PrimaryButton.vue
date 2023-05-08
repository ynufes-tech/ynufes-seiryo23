<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    link: string;
    buttonText: string;
  }>(),
  {
    link: "/",
    buttonText: "Click Me",
  }
);
</script>

<template>
  <NuxtLink :to="props.link" class="primary-button" ontouchstart="">{{
    props.buttonText
  }}</NuxtLink>
</template>

<style scoped lang="scss">
.primary-button {
  display: block;
  padding: 10px 40px;
  width: fit-content;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  border: solid 1px #3b3b3b;
  border-radius: 30px;
  color: #3b3b3b;
  transition: all 0.2s;

  @media (hover: hover) {
    &:hover {
      background-color: #3b3b3b;
      color: #fffdf5;
    }
  }
  @media (hover: none) {
    &:active {
      background-color: #3b3b3b;
      color: #fffdf5;
    }
  }
}
</style>
