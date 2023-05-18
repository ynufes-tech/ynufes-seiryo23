import { createClient } from "microcms-js-sdk";
import { SlideInfo } from "~/model/slide";

const config = useRuntimeConfig();

const client = createClient({
  serviceDomain: config.microCMSServiceDomain,
  apiKey: config.microCMSApiKey,
});

let data = [] as SlideInfo[];

function getSlides(): SlideInfo[] {
  return data;
}

async function updateSlides() {
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

updateSlides().then();

export { getSlides, updateSlides };
