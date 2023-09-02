import { updateSlides } from "~/server/slides";

/**
 * このエンドポイントはスライドの更新を行うためのものです。
 * 現在スライドの更新がないため、このエンドポイントの呼び出しは無効化されています。
 * 直接叩くことでスライドの更新を走らせることが可能です。
 */
export default defineEventHandler(async (event) => {
  await updateSlides();
  return { message: "ok" };
});
