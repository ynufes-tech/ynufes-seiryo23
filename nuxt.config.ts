// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Konkhmer Sleokchher": {
            wght: [400, 500, 600, 700],
          },
          "Noto Sans JP": {
            wght: [400, 500, 600, 700],
          },
        },
      },
    ],
  ],
});
