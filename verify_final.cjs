const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // Scroll to #process
  await page.locator('#process').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  // Check intro paragraph styles
  const introP = page.locator('#journey-title + p');
  const introStyles = await introP.evaluate(el => {
    const cs = window.getComputedStyle(el);
    return {
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      fontFamily: cs.fontFamily,
      fontWeight: cs.fontWeight,
      color: cs.color,
      maxWidth: cs.maxWidth
    };
  });
  console.log('Localhost #process intro paragraph:', introStyles);

  // Check body styles
  const bodyStyles = await page.evaluate(() => {
    const cs = window.getComputedStyle(document.body);
    return {
      fontSize: cs.fontSize,
      lineHeight: cs.lineHeight,
      color: cs.color
    };
  });
  console.log('Localhost body styles:', bodyStyles);

  // Check active step after scrolling down 300px more
  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(800);

  const activeInfo = await page.evaluate(() => {
    const activeText = document.querySelector('#process .sticky p.font-serif')?.textContent;
    const activeLabel = document.querySelector('#process .sticky .font-mono')?.textContent;
    const activeDiamonds = document.querySelectorAll('#process span.scale-110');
    return {
      activeText,
      activeLabel,
      activeDiamondCount: activeDiamonds.length
    };
  });
  console.log('Scroll active state:', activeInfo);

  // Take screenshot of #process
  await page.locator('#process').screenshot({ path: 'e:/REA/process_final.png' });
  console.log('Captured e:/REA/process_final.png');

  await browser.close();
})();

