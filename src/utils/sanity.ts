import { type SanityImageAsset } from "@sanity/asset-utils";
import ImageUrlBuilder from "@sanity/image-url";
import PicoSanity from "picosanity";
import { env } from "../env/client.mjs";

export const sanity = new PicoSanity({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = ImageUrlBuilder(sanity);

export function urlFor(source: SanityImageAsset) {
  return builder.image(source);
}
