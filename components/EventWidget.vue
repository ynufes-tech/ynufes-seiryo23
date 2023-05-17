<script setup lang="ts">
import { genreToString } from "../model/genre";
import { placeToString } from "../model/place";

const props = defineProps<{
  eventData: {
    id: number;
    event_name: string;
    event_description: string;
    event_genre: number;
    place_id: number;
    place_name: string;
    org_name: string;
    org_description: string;
    org_twitter: string;
    org_instagram: string;
    org_facebook: string;
    org_homepage: string;
  };
}>();
const showNoImage = function (e) {
  e.target.onerror = null;
  e.target.src = "/data/icons/events/noimage.png";
};
const iconURL = `https://storage.googleapis.com/ynufes-seiryo23-deploy.appspot.com/icons/${props.eventData.id
  .toString()
  .padStart(4, "0")}-01.webp`;
</script>

<template>
  <div class="event_widget">
    <img :src="iconURL" @error="showNoImage" />
    <div class="tag_area">
      <div
        class="event_genre"
        v-bind:class="`event_genre_${props.eventData.event_genre}`"
      >
        <img class="event_genre_icon" />
        <span>{{ genreToString(props.eventData.event_genre) }}</span>
      </div>
      <div class="location" v-bind:class="`place_${props.eventData.place_id}`">
        {{
          placeToString(props.eventData.place_id) + props.eventData.place_name
        }}
      </div>
    </div>
    <div class="meta_area">
      <h2
        v-text="`${props.eventData.event_name}`"
        style="white-space: pre-wrap"
      />
      <hr />
      <div class="org_name">
        {{ props.eventData.org_name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event_widget {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 13.4em;
  position: relative;
  color: #3b3b3b;
  background: #f5f3ed;
  border: 1px solid #000000;
  text-overflow: ellipsis;
  text-align: center;

  > img {
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    width: 100%;
    aspect-ratio: 1;
    outline: solid 1px #000000;
  }

  > .tag_area {
    opacity: 0.8;
    margin: 0.3rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    color: white;

    > .event_genre {
      .event_genre_icon {
        aspect-ratio: 1;
        vertical-align: middle;
        height: 1.2em;
        margin: 0.1em 0 0.1em 0.1em;
        object-fit: contain;
      }

      > span {
        margin-left: 0.1em;
      }
    }

    > .location {
      color: #000000;
      border: 1px solid #000000;
    }

    > div {
      vertical-align: middle;
      font-size: unquote("max(0.6rem, 0.9em)");
      padding: 0.1em 0.3em;
      border-radius: 0.4em;
    }

    > .event_genre_1 {
      background-color: #b36305;
    }

    > .event_genre_2 {
      background-color: #e32017;
    }

    > .event_genre_3 {
      background-color: #00782a;
    }

    > .event_genre_4 {
      background-color: #003688;
    }

    > .event_genre_5 {
      background-color: #9b0056;
    }

    > .event_genre_6 {
      background-color: #ee7c0e;
    }

    > .place_1 {
      background-color: #b36305;
    }

    > .place_2 {
      background-color: #e32017;
    }

    > .place_3 {
      background-color: #00782a;
    }

    > .place_4 {
      background-color: #003688;
    }

    > .place_5 {
      background-color: #9b0056;
    }

    > .place_6 {
      background-color: #ee7c0e;
    }

    > .place_7 {
      background-color: #84b817;
    }

    > .place_8 {
      background-color: #0098d4;
    }

    > .place_9 {
      background-color: #ffcc00;
    }

    > .place_10 {
      background-color: #ff3399;
    }

    > .place_11 {
      background-color: #ff3399;
    }
  }

  > .meta_area {
    margin: 0.7em;

    h2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      max-height: 2.8rem;
      overflow: hidden;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 1.2em;
      line-height: 1.4rem;
      padding: 0;
      margin: 0;
    }
  }

  > hr {
    margin: 0;
    padding: 0;
  }
}
</style>
