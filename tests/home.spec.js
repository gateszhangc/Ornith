import { expect, test } from "@playwright/test";

test.describe("Ornith landing page", () => {
  test("renders the hero, logo, benchmarks, and GitHub Pages-safe navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "Ornith home" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Agentic Coding Intelligence/i })).toBeVisible();
    await expect(page.getByRole("link", { name: "Get the model" })).toBeVisible();
    await expect(page.getByLabel("Model proof points").getByText("SWE-bench Verified")).toBeVisible();
    await expect(page.getByLabel("Model proof points").getByText("69.4")).toBeVisible();
    await expect(page.getByText("vllm serve deepreinforce-ai/Ornith-1.0-9B")).toBeVisible();
    await expect(page.getByRole("heading", { name: "From local 9B deployment to frontier-scale MoE." })).toBeVisible();
    await expect(page.getByText("Self-scaffolding RL")).toBeVisible();
    await expect(page.getByText("TestingCatalog coverage")).toBeVisible();

    await page.getByRole("link", { name: "Deploy", exact: true }).click();
    await expect(page).toHaveURL(/#deploy$/);
  });

  test("keeps the page readable without horizontal overflow on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    await expect(page.getByRole("heading", { name: /Agentic Coding Intelligence/i })).toBeVisible();
    await expect(page.getByText(/OpenAI-compatible local serving/i)).toBeVisible();
  });
});
