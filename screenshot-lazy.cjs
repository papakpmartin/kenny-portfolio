#!/usr/bin/env node
// Quick lazy-image screenshot script using npx playwright

const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  
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
  await page.screenshot({ path: process.argv[2] || 'screenshot.png' });
  console.log('Screenshot saved');
  await browser.close();
})();
