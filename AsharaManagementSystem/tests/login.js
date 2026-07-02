const { test } = require('@playwright/test');

test('Open AMS Login Page', async ({ page }) => {
  await page.goto('https://www.its52.com/Login.aspx?OneLogin=ASHMNGMTST');
});