<script setup lang="ts">
useHead({
  title: "清陵祭 - パンフレット",
  meta: [
    {
      name: "description",
      content:
        "清陵祭のパンフレットはこちらからダウンロードできます。パンフレットにて当日の企画情報やスケジュールなど様々な情報をご確認いただけます。",
    },
  ],
});
</script>
<template>
  <SectionTitle section-title="パンフレット" class="section-title" />
  <div class="content-wrapper">

  <p>下のボタンから23年度清陵祭の電子版パンフレットをダウンロードいただけます。</p>
  <div class="button-wrapper">
    <PrimaryButton button-text="通常版 (67.0M)" link="https://storage.googleapis.com/ynufes-seiryo23-deploy.appspot.com/pamphlet_seiryo23.pdf" />
    <PrimaryButton button-text="軽量版 (17.8M)" link="https://storage.googleapis.com/ynufes-seiryo23-deploy.appspot.com/pamphlet_seiryo23-light.pdf" />
  </div>
  </div>
  <PrimaryButton button-text="ホームへ戻る" link="/" class="back-home"/>
</template>

<style scoped lang="scss">
.section-title {
  margin: 0 auto;
  width: fit-content;
}
.content-wrapper {
  box-sizing: border-box;
  width: min(40em, 90%);
  margin: 0 auto;
  border: 1px solid #3b3b3b;
  border-radius: 20px;
  padding: 20px;

  .button-wrapper {
    margin: 20px 0;
    .primary-button {
      margin: 10px auto;
    }
  }
}
.back-home {
  margin-top: 120px;
}
</style>
