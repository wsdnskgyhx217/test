const { chromium } = require('playwright-extra')
const stealth = require('puppeteer-extra-plugin-stealth')()

chromium.use(stealth)

chromium.launch({ headless: true }).then(async browser => {
  const page = await browser.newPage()

  console.log('Testing the stealth plugin..')
  await page.goto('https://bot.sannysoft.com', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'screenshot.png', fullPage: true })

  console.log('All done, check the screenshot. ✨')
  await browser.close()
})
