const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  
  // Check section#process
  const processSection = await page.$('#process');
  console.log('Found #process section:', !!processSection);
  
  // Check if svg dial exists
  const svgDial = await page.$('#process svg[viewBox="0 0 120 120"]');
  console.log('Found SVG dial:', !!svgDial);
  
  // Check steps count
  const steps = await page.$$('#process [data-step]');
  console.log('Found steps count:', steps.length);

  // Take screenshot of #process
  if (processSection) {
    await processSection.screenshot({ path: 'e:/REA/process_screenshot.png' });
    console.log('Saved e:/REA/process_screenshot.png');
  }

  // Also check computed styles of the intro paragraph
  const introP = await page.$('#process p.text-\\[length\\:var\\(--fs-lg\\)\\]') || await page.$('#journey-title + p');
  if (introP) {
    const styles = await page.evaluate(el => {
      const cs = window.getComputedStyle(el);
      return {
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        fontWeight: cs.fontWeight,
        color: cs.color,
        fontFamily: cs.fontFamily,
        maxWidth: cs.maxWidth
      };
    }, introP);
    console.log('Intro Paragraph computed styles on localhost:3000:', styles);
  }

  await browser.close();
})();

