<script lang="ts" setup>
import events from '@/assets/json/dammy.json';
import { Genre, genreToString } from "../../model/genre";
import { Place, placeToString } from "../../model/place";

const route = useRoute();
const event = events.find((event) => event.id === Number(route.params.event_id));
</script>

<template>
  <div>
    <SectionFrame>
      <p class="event-name">{{ event?.event_name }}</p>
      <p class="org-name">{{ event?.org_name }}</p>
    </SectionFrame>
  </div>
</template>

<style scoped lang="scss">
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
