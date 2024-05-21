import puppeteer from 'puppeteer';

async function launchBrowser() {
    // Launch a new browser session
    const browser = await puppeteer.launch({ headless: false });  // `headless: false` allows you to see the browser interaction
    const page = await browser.newPage();

    // Set the viewport width and height
    await page.setViewport({
        width: 390 ,  // Set the width to 1280 pixels
        height: 844   // Set the height to 720 pixels
    });

    // Navigate to your Shopify store
    await page.goto('http://127.0.0.1:9292/pages/membership-new-design');

    return { browser, page };
}

export { launchBrowser };
