<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    sectionTitle: string;
  }>(),
  {
    sectionTitle: "Empty Section Title",
  }
);
</script>

<template>
  <div class="frame-section">
    <div>
      <div v-html="props.sectionTitle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.frame-section {
  background: linear-gradient(45deg, #ecb2c6, #8dc0f5);
  padding: 1px;
  margin: 0 auto;
  width: 95%;
  border-radius: 16px;

  > div {
    display: flex;
    border-radius: 15px;
    background-color: #fcfcfc;
    align-items: center;
    justify-content: center;
    padding: 1em;

    > div {
      display: inline-block;
      width: fit-content;
      margin: 0 auto;
      word-break: break-all;
    }
  }
}
</style>
