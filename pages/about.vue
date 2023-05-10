<script lang="ts" setup></script>

<template>
  <SectionTitle class="about-title" section-title="清陵祭とは" />
  <div class="about-description-wrapper">
    <p class="about-description">
      <span class="first-letter">清</span
      >陵祭は横浜国立大学の年2回の学園祭のうち、春に開催される学園祭です。23年度清陵際のテーマは<span
        class="overture-emphasis"
        >Overture</span
      >。日本語で「序曲」や「前奏」といった意味の英単語です。新入生が入ってきて始めての大学祭、大学生活の始まりを彩るような楽しいイベントを目指しています。
    </p>
    <p class="about-description">今年度の清陵祭は以下の日程で行われます。</p>
    <div class="date-description">
      <ul class="date-list">
        <li class="date-list-item">5月20日13時〜21時</li>
        <li class="date-list-item">5月21日10時〜15時</li>
      </ul>
    </div>
    <p class="about-description">
      昨年度の大学祭と異なり事前予約も人数制限もございませんので、ぜひお気軽にお越しください。
    </p>
  </div>
</template>

<style scoped lang="scss">
.about-title {
  margin: 0 auto;
  width: fit-content;
}
.about-description-wrapper {
  max-width: 90%;
  box-sizing: border-box;
  padding: 8px 24px;
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
</style>
