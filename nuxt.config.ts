// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Konkhmer Sleokchher": [400, 500, 600, 700],
    },
  },
});
