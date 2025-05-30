import { Page, test } from "@playwright/test";

export async function attachScreenshot(label: string, page: Page): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const name = `${label} - ${timestamp}`;
  const screenshot = await page.screenshot();
  test.info().attachments.push({
    name,
    body: screenshot,
    contentType: "image/png",
  });
}

export async function attachVideo(page: Page): Promise<void> {
  const videoPath = await page.video()?.path();
  if (videoPath) {
    await test.info().attach("Video", {
      path: videoPath,
      contentType: "video/webm",
    });
  }
}
