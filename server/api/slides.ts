import { SlideInfo } from "~/model/slide";

import { createClient } from "microcms-js-sdk";

const config = useRuntimeConfig();

const client = createClient({
  serviceDomain: config.microCMSServiceDomain,
  apiKey: config.microCMSApiKey,
});

const data = [] as SlideInfo[];

client
  .getList<SlideInfo>({
    endpoint: "slide",
    queries: { limit: 100 },
  })
  .then((res) => {
    console.log(res);
    res.contents.forEach((slide) => {
      data.push(slide);
    });
  });

export default defineEventHandler((event) => {
  return data;
});
