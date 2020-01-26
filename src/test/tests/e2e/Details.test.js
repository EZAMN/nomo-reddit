import '../../common';
import puppeteer from 'puppeteer';
import config from '../../config/puppeteer';
import elements from '../../config/elements';


describe('Details page', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch(config.launchProperties);
    page = await browser.newPage();
    await page.goto(config.server);
    await page.waitFor(elements.home.confirmLoad);
    await page.click(elements.home.firstLink);
    await page.waitFor(elements.details.confirmLoad);
  });

  it('should find an image', async () => {
    const imgCount = await page.$$(elements.details.img);
    imgCount.length.should.be.above(0);
  });

  it('should find a button', async () => {
    const buttonCount = await page.$$(elements.details.button);
    buttonCount.length.should.be.above(0);
  });

  it('should find a post list', async () => {
    const listCount = await page.$$(elements.details.postList);
    listCount.length.should.be.above(0);
  });

  it('should not find gravity values', async () => {
    const gravityCount = await page.$$(elements.details.gravityValues);
    gravityCount.length.should.equal(0);
  });

  it('should find gravity values after clicking the button', async () => {
    await page.click(elements.details.button);
    await page.waitFor(elements.details.gravityValues);
    const gravityCount = await page.$$(elements.details.gravityValues);
    gravityCount.length.should.be.above(0);
  });

  after(async () => {
    await browser.close();
  });
});
