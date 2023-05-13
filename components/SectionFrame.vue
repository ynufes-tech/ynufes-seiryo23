<script lang="ts" setup></script>

<template>
  <div class="frame-section">
    <div>
      <slot />
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
    border-radius: 15px;
    background-color: #fcfcfc;
    align-items: center;
    justify-content: center;
    padding: 1.5em;

    > div {
      display: inline-block;
      width: fit-content;
      margin: 0 auto;
      word-break: break-all;
    }
  }
}
</style>
