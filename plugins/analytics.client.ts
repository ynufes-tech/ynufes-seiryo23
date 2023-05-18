import VueGtagPlugin from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  if (config.public.production_mode === "true") {
    nuxtApp.vueApp.use(VueGtagPlugin, {
      property: {
        id: config.public.google_analytics_id,
      },
    });
  } else {
    console.log("Google Analytics is disabled.", config.public.production_mode);
  }
});
