#!/usr/bin/env node
/**
 * Screenshot portfolio page with lazy-loaded images
 * Handles intersection observer by scrolling elements into view
 */

import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUTPUT_PATH = process.argv[2] || join(__dirname, '..', '..', 'screenshot.png');
const URL = process.argv[3] || 'http://localhost:5173/';

async function screenshotPortfolio() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 720 }
  });

  try {
    // Navigate and wait for network to be idle
    await page.goto(URL, { waitUntil: 'networkidle' });
    
    // Wait a moment for React/Vue hydration
    await page.waitForTimeout(500);

    // Find all lazy-loaded images and scroll them into view
    const images = await page.locator('img[loading="lazy"]').all();
    console.log(`Found ${images.length} lazy-loaded images`);

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      
      // Scroll into view to trigger intersection observer
      await img.scrollIntoViewIfNeeded();
      
      // Wait for this specific image to load
      await img.evaluate((el) => {
        return new Promise((resolve) => {
          if (el.complete && el.naturalHeight > 0) {
            resolve();
          } else {
            el.addEventListener('load', () => resolve());
            el.addEventListener('error', () => resolve()); // Don't hang on errors
            // Timeout fallback
            setTimeout(resolve, 2000);
          }
        });
      });
    }

    // Scroll back to top for consistent screenshot
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(200);

    // Capture screenshot
    await page.screenshot({ 
      path: OUTPUT_PATH, 
      fullPage: false,
      type: 'png'
    });

    console.log(`Screenshot saved to: ${OUTPUT_PATH}`);

  } catch (err) {
    console.error('Screenshot failed:', err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

screenshotPortfolio();
