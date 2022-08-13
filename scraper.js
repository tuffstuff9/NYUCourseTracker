const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const TelegramBot = require('node-telegram-bot-api');
puppeteer.use(StealthPlugin());

async function scrapeCourses(
  COURSE_CATEGORY,
  COURSE_NUMBER,
  TOKEN,
  CHAT_ID,
  interval
) {
  const bot = new TelegramBot(TOKEN, { polling: true });
  while (true) {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });

    const url =
      'https://sis.nyu.edu/psc/csprod/EMPLOYEE/SA/c/NYU_SR.NYU_CLS_SRCH.GBL';

    const page = await browser.newPage();

    await page.goto(url);

    await page.waitForXPath("//a[contains(text(), '" + COURSE_CATEGORY + "')]");
    const courseLink = await page.$x(
      "//a[contains(text(), '" + COURSE_CATEGORY + "')]"
    );
    await courseLink[0].click();

    let divName = 'COURSE';
    divName += COURSE_NUMBER.toString();
    divName += 'nyu';

    await page.waitForXPath("//div[contains(@id,'" + divName + "')]");

    let selector = '#COURSE';
    selector += COURSE_NUMBER.toString();
    selector += 'nyu > div:nth-child(4) > span:nth-child(2)';

    const result = await page.evaluate((selector) => {
      return document.querySelector(selector).textContent;
    }, selector);

    let message = COURSE_CATEGORY + ': ' + COURSE_NUMBER + ' ' + result;
    console.log(message);

    // If you want to check for waitlist, you can add a conditional here.
    if (result == 'Open') {
      bot.sendMessage(CHAT_ID, message);
    }

    await browser.close();

    await new Promise((r) => setTimeout(r, interval));
  }
}

module.exports = { scrapeCourses };
