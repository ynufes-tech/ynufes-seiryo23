<script lang="ts" setup>
const eventData = [];
for (let i = 1; i < 30; i++) {
  eventData.push({
    id: i,
    event_name: "お散歩サークルわかば",
    event_description: "event_description",
    event_genre: 1,
    place_id: 1,
    place_name: "place_name",
    org_name: "org_name",
    org_description: "org_description",
    org_twitter: "org_twitter",
    org_instagram: "org_instagram",
    org_facebook: "org_facebook",
    org_homepage: "org_homepage",
  });
}
</script>

<template>
  <SectionTitle section-title="企画検索" class="section-title" />
  <div class="events-list">
    <EventWidget v-for="event in eventData" :event-data="event" />
  </div>
</template>

<style scoped>
.section-title {
  margin: 0 auto;
}

.events-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 30px 2%;
  width: 100%;

  > div {
    width: 90%;
    box-sizing: border-box;
  }
}

@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 600px) {
  .events-list {
    > div {
      width: min(90%, 350px);
    }
  }
}
@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 800px) {
  .events-list {
    > div {
      width: min(45%, 350px);
    }
  }
}

@media screen and (min-width: 1400px) {
  .events-list {
    > div {
      width: min(30%, 350px);
    }
  }
}
</style>
