import '../../common';
import puppeteer from 'puppeteer';
import config from '../../config/puppeteer';
import elements from '../../config/elements';


describe('Homepage', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch(config.launchProperties);
    page = await browser.newPage();
    await page.goto(config.server);
    await page.waitFor(elements.home.confirmLoad);
  });

  it('should load more than 5 posts', async () => {
    const listLength = await page.evaluate((selector) => document.querySelectorAll(selector).length, elements.home.postListElements);
    listLength.should.be.above(5);
  });

  it('should navigate to the details page on click', async () => {
    await page.click(elements.home.firstLink);
    await page.waitFor(elements.details.confirmLoad);
    const elementsCount = await page.$$(elements.details.confirmLoad);
    elementsCount.length.should.be.above(0);
  });

  after(async () => {
    await browser.close();
  });
});
