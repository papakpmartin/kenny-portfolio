#!/usr/bin/env node
// Quick lazy-image screenshot script

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 2000 } });
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  // Scroll down to trigger lazy loading
  await page.evaluate(() => {
    return new Promise(resolve => {
      let height = 0;
      const timer = setInterval(() => {
        window.scrollBy(0, 300);
        height += 300;
        if (height >= document.body.scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  
  await page.waitForTimeout(1500);
  const outputPath = process.argv[2] || path.join(__dirname, '..', '..', 'screenshot.png');
  
  // Full page screenshot
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log('Screenshot saved to', outputPath);
  await browser.close();
})();
