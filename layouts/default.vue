<script lang="ts" setup></script>

<template>
  <div class="base-frame">
    <div class="page-content">
      <slot />
    </div>
    <div id="base-background">
      <div id="overture-text">OVERTURE</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(0)">
            <stop offset="0%" stop-color="rgba(237,150,192,0.5)" />
            <stop offset="7%" stop-color="rgba(237,150,192,1)" />
            <stop offset="53%" stop-color="rgba(176,203,255,1)" />
            <stop offset="100%" stop-color="rgba(147,235,246,1)" />
          </linearGradient>
        </defs>
        <path
          d="M0,64L60,85.3C120,107,240,149,360,165.3C480,181,600,171,720,154.7C840,139,960,117,1080,106.7C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-frame {
  position: relative;
  width: 100lvw;
  height: 100lvh;
  overflow: hidden;
}

.page-content {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#base-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  #overture-text {
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: left bottom;
    transform: rotate(270deg) translateY(80%);
    font-size: min(10vh, 40vw);
    text-align: center;
    width: 100vh;
    color: #fffdf5;
    font-family: "Konkhmer Sleokchher", cursive;
  }

  > svg {
    z-index: -1;
    transform: rotate(270deg) translateY(100%);
    transform-origin: left bottom;
    width: 100vh;
    object-fit: fill;
    position: absolute;
    bottom: 0;
    left: 0;
    height: auto;

    > path {
      fill: url(#myGradient);
    }
  }
}
</style>

<style lang="scss">
body {
  background: #fffdf5;
  margin: 0;
  padding: 0;
}
</style>
