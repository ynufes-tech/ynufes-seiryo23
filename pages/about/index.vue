<script lang="ts" setup>
const conf = useRuntimeConfig();
const basePath = conf.public.base_url;
const imageList = [
  "images/22-seiryo-images/about1.webp",
  "images/22-seiryo-images/about2.webp",
  "images/22-seiryo-images/about3.webp",
  "images/22-seiryo-images/about4.webp",
  "images/22-seiryo-images/about5.webp",
  "images/22-seiryo-images/about6.webp",
  "images/22-seiryo-images/about7.webp",
  "images/22-seiryo-images/about8.webp",
  "images/22-seiryo-images/about9.webp",
].map((path) => basePath + path);
useHead({
  title: "清陵祭 - 清陵祭について",
  meta: [
    {
      name: "description",
      content:
        "清陵祭は横浜国立大学の春の学園祭で、今年度のテーマは'Overture'。今年は4年ぶりの対面開催! 5月20" +
        "日と21日に開催され、事前予約や人数制限はありません。本ページでは過去の清陵祭の様子も紹介しています。",
    },
  ],
});
</script>

<template>
  <SectionTitle class="about-title" section-title="清陵祭とは" />
  <div class="about-description-wrapper">
    <p class="about-description">
      <span class="first-letter">清</span
      >陵祭は横浜国立大学の年2回の学園祭のうち、春に開催される学園祭です。23清陵祭のテーマは<span
        class="overture-emphasis"
        >Overture</span
      >。日本語で「序曲」や「前奏」といった意味の英単語です。新入生が入ってきて始めての大学祭、大学生活の始まりを彩るような楽しいイベントを目指しています。
    </p>
    <p class="about-description">今年度の清陵祭は以下の日程で行われます。</p>
    <div class="date-description">
      <ul class="date-list">
        <li class="date-list-item">5月20日13時〜21時</li>
        <li class="date-list-item">5月21日&ensp;9時〜15時</li>
      </ul>
    </div>
    <p class="about-description">
      昨年度の大学祭と異なり事前予約も人数制限もございませんので、ぜひお気軽にお越しください。
    </p>
  </div>
  <SectionTitle class="about-seiryo-22" section-title="過去の清陵祭" />
  <div class="about-description-wrapper">
    <p class="about-description">
      <span class="first-letter">今</span
      >年は4年ぶりの対面開催となります。2020年と2021年は開催中止となり、2022年はオンラインでの開催となりました。
      2019年の清陵祭の様子をご覧ください。
    </p>
    <TheCarousel :imageList="imageList" />
  </div>

  <PrimaryButton button-text="ホームに戻る" style="margin-top: 40px" />
</template>

<style scoped lang="scss">
.about-title,
.about-seiryo-22 {
  margin: 0 auto;
  width: fit-content;
}

.about-description-wrapper {
  max-width: min(40em, 90%);
  box-sizing: border-box;
  margin: 0 auto;
  width: 90vw;

  .about-description {
    line-height: 1.8rem;
    margin: 0;
    padding: 0;
  }

  .first-letter {
    font-size: 2rem;
    font-weight: bold;
    padding-right: 4px;
  }

  .overture-emphasis {
    font-family: "Konkhmer-Sleokchher", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
  }

  .date-description {
    margin: 16px auto;

    .date-list {
      list-style: none;
      padding: 0;
      margin: 0;

      .date-list-item {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        line-height: 2.4rem;
        text-align: center;
      }
    }
  }
}

.the-carousel {
  margin: 1em auto;
}
</style>
