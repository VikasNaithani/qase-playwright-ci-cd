import { test, expect } from "@playwright/test";
import { qase } from "playwright-qase-reporter";
import { markdownContent } from "./markdownContent";

test('should display correct homepage title', async ({ page }) => {
  await page.goto('https://example.com');

  // Intentionally failing expectation
  await expect(page.locator('h1')).toHaveText('Welcome to Example'); // <-- this will fail
});
