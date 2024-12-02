import puppeteer from 'puppeteer';

let browser, page;

beforeAll(async () => {  
  browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu'
    ],
    timeout: 10000,
    headless: true,
    slowMo: 30
  });
  page = await browser.newPage();
  await page.goto('http://localhost:3000/', {waitUntil: 'load'});
}, 120000);

test('Button has correct color', async () => {
  const color = await page.$eval('button', el => window.getComputedStyle(el).backgroundColor);
  expect(color).toBe('rgb(173, 216, 230)'); // lightblue
});

test('Input has correct color', async () => {
  const color = await page.$eval('input', el => window.getComputedStyle(el).backgroundColor);
  expect(color).toBe('rgb(240, 255, 255)'); // azure
});

afterAll(async () => {  
  await browser.close()
});
