<script lang="ts" setup></script>

<template>
  <div class="header-base">
    <div class="header-base__title">
      <div>
        <h1>清陵祭2023</h1>
        <h2>横浜国立大学 大学祭</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-base {
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 700;
  height: 90px;
  width: 90vw;
  margin: 0 auto;
  opacity: 0.8;
  background: #93ebf6;
  border-radius: 20px;
}

.header-base__title {
  width: fit-content;
  padding-left: 30px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    width: fit-content;
    text-align: center;

    > h1 {
      font-size: 30px;
      line-height: 1;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    > h2 {
      line-height: 1;
      font-size: 15px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }
}
</style>