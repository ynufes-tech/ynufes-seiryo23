<script lang="ts" setup>
import events from "assets/data/events.json";

useHead({
  title: "清陵祭 - 企画一覧",
  meta: [
    {
      name: "description",
      content:
        "清陵祭の企画一覧です。清陵祭では、様々な企画を実施しています。企画の詳細はこちらからご確認ください。",
    },
  ],
});
</script>

<template>
  <SectionTitle section-title="企画一覧" class="section-title" />
  <div class="events-list">
    <NuxtLink
      v-for="event in events"
      :to="`/event/${event.id}`"
      :key="event.id"
    >
      <EventWidget :event-data="event" />
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  margin: 0 auto;
}

.events-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 40px 2%;
  width: 100%;

  > a {
    margin-bottom: auto;
    text-decoration: none;
    color: unset;
    width: 90%;
    box-sizing: border-box;
    transition: all 0.2s;

    @media (hover: hover) {
      &:hover {
        > div {
          transform: scale(0.98);
        }
      }
    }
    @media (hover: none) {
      &:active {
        > div {
          transform: scale(0.98);
        }
      }
    }
  }
}

@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 600px) {
  .events-list {
    > a {
      width: min(90%, 350px);
    }
  }
}

@media screen and (min-aspect-ratio: 1/1.4) and (min-width: 800px) {
  .events-list {
    > a {
      width: min(45%, 350px);
    }
  }
}

@media screen and (min-width: 1400px) {
  .events-list {
    > a {
      width: min(30%, 350px);
    }
  }
}
</style>
