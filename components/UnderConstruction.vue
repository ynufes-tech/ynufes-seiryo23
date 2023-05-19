<script lang="ts" setup></script>

<template>
  <div class="sorry-description">
    <h1 class="sorry-heading">このページは現在未公開となっております</h1>
    <p>
      このページは現在作成中です。ページの公開まで今しばらくお待ちください。
    </p>
  </div>
  <div class="speech-bubble"><p class="momesen-comment">待ってもめ〜</p></div>
  <div class="kamome-senpai">
    <img
      src="/images/momesen.svg"
      alt="kamome-senpai"
      width="160px"
      height="160px"
    />
  </div>
</template>

<style scoped lang="scss">
.sorry-heading {
  font-size: 20px;
}
.sorry-description {
  text-align: center;
  margin: 0 auto;
}
.speech-bubble {
  position: relative;
  margin: 0 auto;
  padding: 10px 30px;
  width: fit-content;
  text-align: center;
  background-color: #93ebf6;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  box-sizing: border-box;
  z-index: 20;
  transform: translateX(50%);
  animation: delay-popup 1s;

  .momesen-comment {
    z-index: 100;
    color: #3b3b3b;
  }
}

.speech-bubble:before {
  content: "";
  position: absolute;
  bottom: -24px;
  left: -8px;
  margin-top: -15px;
  border: 15px solid transparent;
  border-left: 60px solid #93ebf6;
  z-index: 10;
  transform: rotate(135deg);
}
.kamome-senpai {
  width: 100%;
  display: flex;
  justify-content: center;
  animation: momesen 1s;
}
@keyframes momesen {
  from {
    transform: translateX(10%);
  }
  to {
    transform: translateX(0%);
  }
}
@keyframes delay-popup {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
