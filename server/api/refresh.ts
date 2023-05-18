import { updateSlides } from "~/server/slides";

export default defineEventHandler(async (event) => {
  await updateSlides();
  return { message: "ok" };
});
