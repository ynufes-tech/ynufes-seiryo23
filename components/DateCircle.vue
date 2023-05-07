<script lang="ts" setup></script>

<template>
  <div class="date-circle">
    <div class="first-day">
      <p class="date-circle-date">5月20日(土)</p>
      <p class="date-circle-time">13:00〜21:00</p>
    </div>
    <div class="second-day">
      <p class="date-circle-date">5月21日(日)</p>
      <p class="date-circle-time">09:00〜15:00</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.date-circle {
  position: relative;
  width: 60vw;
  height: 60vw;
  max-width: 480px;
  max-height: 480px;
  border-radius: 50%;
  background: linear-gradient(
    207.74deg,
    #ecb2c6 12.39%,
    #bbaae1 55.14%,
    #8dc0f5 87.97%
  );
  margin: 0 auto;

  .first-day,
  .second-day {
    width: 150%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .first-day {
    top: 28%;
    text-align: center;
  }
  .second-day {
    bottom: 28%;
    text-align: center;
  }
  .date-circle-date,
  .date-circle-time {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }
}
@media screen and (min-width: 630px) {
  .date-circle {
    .date-circle-date,
    .date-circle-time {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }
  }
}
</style>
