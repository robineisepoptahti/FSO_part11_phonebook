const { test, describe, expect } = require("@playwright/test");

describe("Render test", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("Phonebook")).toBeVisible();
  });
});

describe("Render info from backend", () => {
  test("Data from MongoDB renders", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("Kiisala")).toBeVisible();
  });
});
