<script lang="ts" setup>
useHead({
  title: '清陵祭2023 公式HP トップ',
  meta: [
    {
      name: 'description',
      content: '5/20,21に開催される清陵祭2023の公式HPです。今年は3年ぶりの対面開催!!'
    },
  ]
})
</script>

<template>
  <DateCircle />
  <div class="access">
    <SectionTitle class="access-title" section-title="アクセス" />
    <div class="train-access">
      <p>横浜市営地下鉄ブルーライン「三ツ沢上町駅」より正門まで徒歩16分</p>
      <p>相鉄線「和田町駅」より南門・南通用門まで徒歩20分</p>
      <p>相鉄・JR直通線「羽沢横浜国大駅」より北門・西門まで徒歩15分</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.access {
  width: 100%;
  margin: 100px auto 0;

  .access-title {
    margin: 0 auto;
    width: fit-content;
  }

  .train-access {
    border: 1px solid #3b3b3b;
    border-radius: 12px;
    padding: 20px;
    margin: 0 auto;
    max-width: 95vw;
    width: fit-content;
    text-align: left;
    box-sizing: border-box;
  }
}
</style>
