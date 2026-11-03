const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Scroll down to #process
  await page.locator('#process').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  // Take screenshot of #process when scrolled to it
  await page.locator('#process').screenshot({ path: 'e:/REA/process_scrolled.png' });

  // Check left dial element
  const stickyDial = await page.$('#process .sticky');
  const dialHtml = stickyDial ? await stickyDial.innerHTML() : 'NOT FOUND';
  console.log('Sticky dial found?', !!stickyDial);

  // Check right timeline element
  const timeline = await page.$('#process ol[data-steps]');
  console.log('Timeline found?', !!timeline);

  // Check active step
  const activeNode = await page.$('#process [data-step="0"] span');
  const activeClass = activeNode ? await activeNode.getAttribute('class') : '';
  console.log('Step 0 diamond class:', activeClass);

  await browser.close();
})();

