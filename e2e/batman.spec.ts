import { test, expect } from "@playwright/test";

test("Looking for batman", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Input at least 3 characters").click();
  await page.getByPlaceholder("Input at least 3 characters").fill("batman");
  await page.getByRole("button", { name: "Search" }).click();
});
