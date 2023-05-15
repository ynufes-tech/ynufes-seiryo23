<script lang="ts" setup>
useHead({
  title: "清陵祭2023 公式HP トップ",
  meta: [
    {
      name: "description",
      content:
        "5/20,21に開催される清陵祭2023の公式HPです。今年は4年ぶりの対面開催!!",
    },
  ],
});
</script>

<template>
  <DateCircle />
  <SponsorsView />
  <div class="access">
    <SectionTitle class="access-title" section-title="アクセス" />
    <div class="train-access">
      <p>横浜市営地下鉄ブルーライン「三ツ沢上町駅」より正門まで徒歩16分</p>
      <p>相鉄線「和田町駅」より南門・南通用門まで徒歩20分</p>
      <p>相鉄・JR直通線「羽沢横浜国大駅」より北門・西門まで徒歩15分</p>
    </div>
    <iframe
      id="access-map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3249.248346481359!2d139.5865167!3d35.4733988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601859679ea21c77%3A0x28d72ba15dae9e6c!2z5qiq5rWc5Zu956uL5aSn5a2m!5e0!3m2!1sja!2sjp!4v1683509810519!5m2!1sja!2sjp"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
.access {
  width: 100%;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .access-title {
    margin: 0 auto;
    width: fit-content;
  }

  .train-access {
    border: 1px solid #3b3b3b;
    border-radius: 12px;
    padding: 20px;
    margin: 0 auto;
    max-width: 90vw;
    width: fit-content;
    text-align: left;
    box-sizing: border-box;
  }

  #access-map {
    margin-top: 20px;
    border-radius: 12px;
    max-width: 90vw;
    aspect-ratio: 1;
  }
}
</style>
