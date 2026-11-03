const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    
    console.log('Navigating to https://cprealestate.in/ ...');
    await page.goto('https://cprealestate.in/', { waitUntil: 'networkidle', timeout: 30000 });
    
    // Inspect body styles
    const bodyStyles = await page.evaluate(() => {
      const b = document.body;
      const cs = window.getComputedStyle(b);
      return {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        lineHeight: cs.lineHeight,
        fontWeight: cs.fontWeight,
        color: cs.color,
        letterSpacing: cs.letterSpacing
      };
    });
    console.log('Live body styles:', bodyStyles);

    // Inspect wrap styles
    const wrapStyles = await page.evaluate(() => {
      const w = document.querySelector('.wrap');
      if (!w) return null;
      const cs = window.getComputedStyle(w);
      return {
        maxWidth: cs.maxWidth,
        paddingLeft: cs.paddingLeft,
        paddingRight: cs.paddingRight,
        width: cs.width
      };
    });
    console.log('Live .wrap styles:', wrapStyles);

    // Inspect Section 4 (journey) header and intro paragraph
    const journeyInfo = await page.evaluate(() => {
      const section = document.querySelector('section[aria-labelledby="journey-title"]');
      if (!section) return null;
      const h2 = section.querySelector('h2');
      const p = section.querySelector('p');
      const h2Cs = h2 ? window.getComputedStyle(h2) : null;
      const pCs = p ? window.getComputedStyle(p) : null;
      return {
        h2: h2Cs ? {
          fontSize: h2Cs.fontSize,
          lineHeight: h2Cs.lineHeight,
          fontFamily: h2Cs.fontFamily,
          fontWeight: h2Cs.fontWeight
        } : null,
        p: pCs ? {
          fontSize: pCs.fontSize,
          lineHeight: pCs.lineHeight,
          fontFamily: pCs.fontFamily,
          fontWeight: pCs.fontWeight,
          maxWidth: pCs.maxWidth,
          color: pCs.color
        } : null
      };
    });
    console.log('Live journey typography:', journeyInfo);

    // Inspect live steps in journey
    const stepsInfo = await page.evaluate(() => {
      const section = document.querySelector('section[aria-labelledby="journey-title"]');
      if (!section) return null;
      const stepItems = section.querySelectorAll('[data-step]');
      if (!stepItems.length) return null;
      const first = stepItems[0];
      const diamond = first.querySelector('span');
      const textDiv = first.querySelector('div');
      const pTag = textDiv ? textDiv.querySelector('p') : null;
      const h3 = textDiv ? textDiv.querySelector('h3') : null;
      const desc = textDiv ? textDiv.querySelector('p:last-of-type') : null;
      return {
        stepCount: stepItems.length,
        diamond: diamond ? {
          width: window.getComputedStyle(diamond).width,
          height: window.getComputedStyle(diamond).height,
          transform: window.getComputedStyle(diamond).transform,
        } : null,
        h3: h3 ? {
          fontSize: window.getComputedStyle(h3).fontSize,
          lineHeight: window.getComputedStyle(h3).lineHeight,
          fontFamily: window.getComputedStyle(h3).fontFamily,
        } : null,
        desc: desc ? {
          fontSize: window.getComputedStyle(desc).fontSize,
          lineHeight: window.getComputedStyle(desc).lineHeight,
          color: window.getComputedStyle(desc).color,
          maxWidth: window.getComputedStyle(desc).maxWidth,
        } : null,
      };
    });
    console.log('Live steps info:', stepsInfo);

    await browser.close();
  } catch (err) {
    console.error('Error during Playwright inspection:', err.message);
  }
})();

