<script lang="ts" setup>
import events from '@/assets/json/dammy.json';
import { Genre, genreToString } from "../../model/genre";
import { Place, placeToString } from "../../model/place";

interface Event {
  id: number
  event_name: string
  event_description: string
  event_genre: Genre
  place_id: Place
  place_name: string
  org_name: string
  org_description: string
  org_twitter: string
  org_instagram: string
  org_facebook: string
  org_homepage: string
}

const route = useRoute();
const event = events.find((event) => event.id === Number(route.params.event_id));
</script>

<template>
  <div v-if="!event">
    <SectionFrame>
      <p class="event-name">企画詳細ページが見つかりませんでした</p>
    </SectionFrame>
    <PrimaryButton button-text="企画一覧へ戻る" link="/events" class="button-event-list" />
  </div>
  <div v-if="event">
    <SectionFrame>
      <p class="event-name">{{ event?.event_name }}</p>
      <p class="org-name">{{ event?.org_name }}</p>
    </SectionFrame>
  </div>
</template>

<style scoped lang="scss">
.button-event-list {
  margin-top: 20px;
}
.frame-section {
  width: 90%;
  text-align: center;
  max-width: 600px;
  position: relative;

.event-name {
  font-size: 20px;
}

  .org-name {
    margin: 0;
    padding: 8px 20px;
    position: absolute;
    bottom: -12px;
    right: -12px;
    background-color: rgb(167, 255, 255);
    border-radius: 16px;
  }
}
</style>
