import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30000,
  retries: 0,
  webServer: {
    command: "npm start",
    url: "http://localhost:3001",
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    headless: true,
    baseURL: "http://localhost:3001",
  },
});
