#!/usr/bin/env node
// Screenshot at mobile width to see nav behavior

const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  // Mobile viewport
  const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
  
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  
  // Scroll to trigger lazy loading
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
  const outputPath = process.argv[2] || path.join(__dirname, '..', '..', 'screenshot-mobile.png');
  await page.screenshot({ path: outputPath, fullPage: false });
  console.log('Screenshot saved to', outputPath);
  await browser.close();
})();
