<script lang="ts" setup></script>

<template>
  <header>
    <div id="seiryo-logo">
      <h1>清陵祭2023</h1>
      <h2>横浜国立大学 大学祭</h2>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  > #seiryo-logo {
    z-index: 10;
    text-align: center;
    margin: 0 auto;
    padding: 20px 0;
    width: 100%;
    color: #594e4e;
    box-sizing: border-box;
    border-bottom: 1px solid #3b3b3b;

    > h1 {
      font-size: 35px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    > h2 {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
  }

  width: max(200px, 25vw);
  height: 100lvh;
}
</style>
