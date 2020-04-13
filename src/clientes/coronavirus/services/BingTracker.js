import puppeteer from 'puppeteer';

const timer = 300000;
let lastConfirmed = 0;

async function start() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://www.bing.com/covid');

  await page.waitForNavigation();
  const confirmed = await page.evaluate(() => {
    let data = '';
    try {
      data = document.querySelector(
        '#main > div > div.wholePage > div.content > div.countryPanel > div > div.infoTile > div.confirmed'
      ).innerText;
    } catch (e) {
      console.log('querySelector error: ', e);
    }
    return data;
  });

  if (confirmed && confirmed !== lastConfirmed) {
    console.log(confirmed);
    lastConfirmed = confirmed;
  }

  await browser.close();
}

setInterval(async () => {
  await start();
}, timer);
