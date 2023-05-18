import { getSlides } from "~/server/slides";

export default defineEventHandler((event) => {
  return getSlides();
});
