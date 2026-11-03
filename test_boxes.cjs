const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const dial = page.locator('#process svg').first();
  const timeline = page.locator('#process ol[data-steps]');
  console.log('Dial box:', await dial.boundingBox());
  console.log('Timeline box:', await timeline.boundingBox());
  await browser.close();
})();

