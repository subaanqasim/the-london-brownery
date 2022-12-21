import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/sanity/schemas";
import { visionTool } from "@sanity/vision";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media } from "sanity-plugin-media";
import { env } from "./src/env/client.mjs";

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  name: "tlb-prod",
  title: "the-london-brownery",

  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,

  basePath: "/cms",

  plugins: [
    deskTool(),
    imageHotspotArrayPlugin(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },
});
