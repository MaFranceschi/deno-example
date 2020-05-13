import { config } from "https://deno.land/x/dotenv/mod.ts";

const {
  APP_PORT,
  MEDIUM_API_URL,
  MEDIUM_INTEGRATION_KEY,
} = config();

const integrationKey: string = MEDIUM_INTEGRATION_KEY;
const mediumUrl: string = MEDIUM_API_URL;
const port: number = parseInt(APP_PORT);

export { integrationKey, mediumUrl, port };
