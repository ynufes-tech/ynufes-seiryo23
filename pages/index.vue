<script lang="ts" setup></script>

<template>
  <DateCircle />
  <div class="access">
    <SectionTitle section-title="アクセス" />
    <div class="train-access">
      <p>横浜市営地下鉄ブルーライン「三ツ沢上町駅」より正門まで徒歩16分</p>
      <p>相鉄線「和田町駅」より南門・南通用門まで徒歩20分</p>
      <p>相鉄・JR直通線「羽沢横浜国大駅」より北門・西門まで徒歩15分</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.access {
  width: calc(90vw - 130px);
  margin: 100px auto 0px;

  .train-access {
    border: 1px solid #3b3b3b;
    border-radius: 12px;
    padding: 20px;
    margin: 0 auto;
    width: fit-content;
    text-align: left;
  }
}
</style>
