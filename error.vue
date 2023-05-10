<template>
  <NuxtLayout id="layout-frame">
    <div class="content">
      <h1>404</h1>
      <div id="error-message">
        <span>お探しのページは</span>
        <span>見つかりませんでした。</span>
      </div>
      <PrimaryButton button-text="ホームに戻る" link="/" />
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
#layout-frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100lvh;
  padding: 0 !important;
}
.content {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: min(30px, 7vw);

  h1 {
    font-size: min(100px, 4em);
    font-weight: bold;
    margin: 0;
    padding: 0;
  }

  #error-message {
    display: flex;
    flex-direction: column;
    font-size: 1em;
    align-items: center;
    padding: min(80px, 8vh) 0;

    span {
      display: block;
      padding: 0;
    }
  }

  .primary-button {
    display: block;
  }
}
</style>
