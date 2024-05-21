import { launchBrowser } from './pageSettings.js';
import { expect } from 'chai';
import chalk from 'chalk';


/*
    ***************************************************************
    * Testing the button opens the funnel on the first step
    ***************************************************************
*/
async function testButtonClick(page) {
    // Wait for the button to appear in the DOM
    await page.waitForSelector('#subsc40-open-23', { visible: true });

    // Click on the button
    await page.click('#subsc40-open-23');
    
    // Wait for the next step in the funnel to be visible
    await page.waitForSelector('#subs-001-main', { visible: true });

    console.log(chalk.green('1. Funnel is on the first step √'));
}

/*
    ***************************************************************
    * Testing the text of the Hero section
    ***************************************************************
*/
async function testHeroSectionText(page) {
    const elementHandle = await page.$('.new_member_banner .membership-text-span-2022 .eby-subtitle-text');
    const text = await elementHandle.evaluate(node => node.innerText);
    
    // Assert the text is as expected
    expect(text).to.equal('Start your subscription today');

    console.log(chalk.green('2. Assertion passed: for text! √'));
}


(async () => {
    let browser; 
    try {
        const launched  = await launchBrowser();
        browser = launched.browser; 
        const page = launched.page;

        console.log(chalk.white('Testing Hero Section \n'));
       // Run individual test functions
       await testButtonClick(page);
       await testHeroSectionText(page);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Only attempt to close the browser if it has been defined
        if (browser) {
            await browser.close();
        }
    }
})();
