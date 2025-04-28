import "dotenv/config";
import { defineConfig , type Config } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./database/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  },
} as Config);
