<template>
  <div class="sponsor-frame">
    <a
      href="https://www.sotetsu-joinus.com/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <img src="@/assets/images/JOINUS.jpg" />
    </a>
    <a
      href="https://www.hazawa-kubotaganka.com/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <img src="@/assets/images/KUBOTA.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: "AdsView",
};
</script>

<style scoped lang="scss">
.sponsor-frame {
  display: flex;
  margin: 30px auto;
  flex-direction: row;
  align-items: center;
  max-width: min(90%, 600px);
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  > a {
    flex: 1;

    > img {
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
