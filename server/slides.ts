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
      console.log(res);
      res.contents.forEach((slide) => {
        data.push(slide);
      });
      data = newData;
    });
}

await updateSlides();

export { getSlides, updateSlides };
