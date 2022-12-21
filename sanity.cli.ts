import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";
import { env } from "./src/env/client.mjs";

const dev = process.env.NODE_ENV !== "production";
loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });
