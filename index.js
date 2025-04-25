const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()

chromium.use(stealth)

chromium.launch({ headless: true }).then(async browser => {
  const url = Buffer.from('aHR0cHM6Ly9uZWtvY3VyaXQuYXNpYS8=', 'base64').toString('utf8')

  for (let i = 0; i < 5; i++) {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.close()
  }

  await browser.close()
})
