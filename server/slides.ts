import { createClient } from "microcms-js-sdk";
import type { SlideInfo } from "~/model/slide";

const config = useRuntimeConfig();

const client = config.microCMSServiceDomain && config.microCMSApiKey ? createClient({
  serviceDomain: config.microCMSServiceDomain,
  apiKey: config.microCMSApiKey,
}) : undefined;

let data = [] as SlideInfo[];

function getSlides(): SlideInfo[] {
  return data;
}

async function updateSlides() {
  if (!client) return;
  const newData = [] as SlideInfo[];
  await client
    .getList<SlideInfo>({
      endpoint: "slide",
      queries: { limit: 100 },
    })
    .then((res) => {
      res.contents.forEach((slide) => {
        newData.push(slide);
      });
      data = newData;
    });
}

updateSlides().catch(() => {
  console.error("Unable to refresh the archived slides");
});

export { getSlides };
