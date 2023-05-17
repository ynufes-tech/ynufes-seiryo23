<script lang="ts" setup>
import events from "@/assets/data/dammy.json";
import { Genre, genreToString } from "../../model/genre";
import { Place, placeToString } from "../../model/place";

interface Event {
  id: number;
  event_name: string;
  event_description: string;
  event_genre: Genre;
  place_id: Place;
  place_name: string;
  org_name: string;
  org_description: string;
  org_twitter: string;
  org_instagram: string;
  org_facebook: string;
  org_homepage: string;
}

const route = useRoute();
const path = route.fullPath;
const event = events.find(
  (event) => event.id === Number(route.params.event_id)
);

const showNoImage = function (e) {
  e.target.onerror = null;
  e.target.src = "/data/icons/events/noimage.png";
};
const iconURL = `https://storage.googleapis.com/ynufes-seiryo23-deploy.appspot.com/icons/${event?.id
  .toString()
  .padStart(4, "0")}-01.webp`;
</script>

<template>
  <div v-if="!event">
    <SectionFrame>
      <p class="event-name">企画詳細ページが見つかりませんでした</p>
    </SectionFrame>
    <PrimaryButton
      button-text="企画一覧へ戻る"
      link="/events"
      class="button-event-list"
    />
  </div>

  <div v-if="event">
    <SectionFrame>
      <p class="event-name">{{ event?.event_name }}</p>
      <p class="org-name">{{ event?.org_name }}</p>
    </SectionFrame>
    <div class="bread-crumbs">
      <p>
        <NuxtLink to="/">ホーム</NuxtLink> /
        <NuxtLink to="/events">企画一覧</NuxtLink> /
        <NuxtLink :to="path">{{ event?.event_name }}</NuxtLink>
      </p>
    </div>
    <div class="tag-wrapper">
      <span class="tag-place">{{ placeToString(event?.place_id) + event?.place_name }}</span>
      <span class="tag-place">{{ genreToString(event?.event_genre) }}</span>
    </div>
    <div class="icon-image-wraooer">
      <img :src="iconURL" @error="showNoImage" class="event-icon-image" />
    </div>
    <div class="description-wrapper">
      <p class="event-description" v-text="event.event_description"></p>
      <SectionTitle section-title="企画団体紹介" />
      <p class="event-description" v-text="event.org_description"></p>
    </div>
    <PrimaryButton button-text="企画一覧へ戻る" link="/events" />
  </div>
</template>

<style scoped lang="scss">
.button-event-list {
  margin-top: 20px;
}
.frame-section {
  width: 90%;
  text-align: center;
  max-width: min(40em, 90%);
  position: relative;

  .event-name {
    font-size: 20px;
  }

  .org-name {
    color: #3b3b3b;
    margin: 0;
    padding: 8px 20px;
    position: absolute;
    bottom: -12px;
    right: -12px;
    background-color: rgb(167, 255, 255);
    border-radius: 16px;
  }
}

.bread-crumbs {
  max-width: min(40em, 90%);
  margin: 0 auto;

  a {
    font-size: 0.8rem;
    color: #7b7b7b;
    text-decoration: none;

    &:hover {
      color: #3b3b3b;
    }
  }
}
.tag-wrapper {
  max-width: min(40em, 90%);
  margin: 0 auto;

  .tag-place {
    padding: 3px 12px;
    border: 1px solid #3b3b3b;
    border-radius: 16px;
    font-size: 0.8rem;
    margin-right: 4px
  }
}
.icon-image-wraooer {
  width: 90%;
  max-width: min(40em, 90%);
  margin: 40px auto 0;
  text-align: center;

  .event-icon-image {
    max-width: min(60%, 320px);
    border-radius: 20px;
  }
}
.description-wrapper {
  margin: 20px auto 0;
  max-width: min(40em, 90%);

  .event-description {
    margin: 40px auto;
    white-space: pre-wrap;
    line-height: 1.6rem;
  }

  .tone-wrapper {
    width: fit-content;
    margin: 40px auto 20px;
  }
}
</style>
