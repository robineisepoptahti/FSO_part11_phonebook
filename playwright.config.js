import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30000,
  retries: 0,
  webServer: {
    command: "PORT=3001 npm start",
    url: "http://localhost:3001",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    env: {
      PORT: "3001",
      MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost:27017/test",
    },
  },
  use: {
    headless: true,
    baseURL: "http://localhost:3001",
  },
});
