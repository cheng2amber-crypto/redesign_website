import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL } from "node:url";

const cwd = "/Users/jike/Documents/New project/chatbox-redesign";
const beforePath = path.join(cwd, "before-chatboxai-zh.png");
const afterPath = path.join(cwd, "after-redesign.png");
const afterUrl = pathToFileURL(path.join(cwd, "index-redesign.html")).href;

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });

await page.goto("https://chatboxai.app/zh/", { waitUntil: "domcontentloaded", timeout: 120000 });
await page.waitForTimeout(2200);
await page.screenshot({ path: beforePath, fullPage: false });

await page.goto(afterUrl, { waitUntil: "load", timeout: 120000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: afterPath, fullPage: false });

await browser.close();
console.log("done");
