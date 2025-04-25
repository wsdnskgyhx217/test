const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()

chromium.use(stealth)

chromium.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()

  await page.goto(Buffer.from('aHR0cHM6Ly9uZWtvY3VyaXQuYXNpYS8=', 'base64').toString('utf8'), { waitUntil: 'networkidle' })

  await browser.close()
})
