<script setup lang="ts">
import { genreToString } from "~/model/genre";
import { placeToString } from "~/model/place";

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
      <div class="event_genre">
        {{ genreToString(props.eventData.event_genre) }}
      </div>
      <div class="location">
        {{
          placeToString(props.eventData.place_id) + props.eventData.place_name
        }}
      </div>
    </div>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.event_widget {
  position: relative;
  display: flex;
  padding: 10px 10px 10px;
  transition: scale 0.2s ease-in-out;

  * {
    transition: all 0.2s ease-in-out;
  }

  > img {
    border: 1px solid #ccc;
    aspect-ratio: 1;
    width: min(30vw, 100px);
    height: fit-content;
    margin: auto 0;
    border-radius: 10px;
  }

  .tag_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    width: 100%;
    height: 100%;

    .event_genre {
      font-size: 0.9em;
      border: 1px solid #ccc;
      width: fit-content;
      padding: 2px 5px;
      border-radius: 5px;
      margin: 5px 0;
    }
  }

  .meta_area {
    h2 {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }

    hr {
      border: none;
      height: 0.5px;
      background: #3b3b3b;
    }
  }

  &::before {
    font-size: 0.8em;
    content: "くわしくみる";
    position: absolute;
    right: 20px;
    bottom: -8px;
  }

  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 20px);
    height: 1px;
    border-radius: 2px;
    background: #3b3b3b;
    margin-top: 10px;
    top: 100%;
  }

  &:hover {
    &::after {
      background: linear-gradient(
        207.74deg,
        #ecb2c6 12.39%,
        #bbaae1 55.14%,
        #8dc0f5 87.97%
      );
    }

    h2,
    div,
    &::before {
      background: linear-gradient(
        207.74deg,
        #ef98b6 12.39%,
        #bbaae1 55.14%,
        #8dc0f5 87.97%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .meta_area > hr {
      background: linear-gradient(
        207.74deg,
        #ef98b6 12.39%,
        #bbaae1 55.14%,
        #8dc0f5 87.97%
      );
    }

    img {
      box-shadow: 0 0 0 5px #fff3;
    }
  }
}
</style>
