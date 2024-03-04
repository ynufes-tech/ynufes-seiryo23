// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/style/reset.css"],
  runtimeConfig: {
    public: {
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID,
      production_mode: process.env.PRODUCTION_MODE,
      base_url: process.env.BASE_URL,
    },
    microCMSServiceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    microCMSApiKey: process.env.MICROCMS_API_KEY,
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Konkhmer Sleokchher": true,
          "Noto Sans JP": true,
        },
      },
    ],
  ],
  app: {
    baseURL: process.env.BASE_URL ? process.env.BASE_URL : "/",
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
      meta: [
        { property: "og:type", content: "website" },
        {
          property: "og:site_name",
          content: "清陵祭2023 - 横浜国立大学大学祭",
        },
        {
          property: "og:image",
          content: "https://seiryo.ynu-fes.yokohama/images/OGP_seiryo23.webp",
        },
        {
          property: "keywords",
          content:
            "清陵祭,横浜国立大学,大学祭,文化祭,横国,清涼祭,せいりょうさい,2023",
        },
      ],
    },
  },
});
