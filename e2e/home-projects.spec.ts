import { expect, test } from '@playwright/test'

const projects = {
  FLOSSAfrica: 'https://flossafrica.com/',
  Pairlore: 'https://pairlore.com/',
  Sailsconf: 'https://sailsconf.com/',
  Slipway: 'https://docs.sailscasts.com/slipway/',
  Middlefour: 'https://middlefour.com/',
  TemboAI: 'https://temboai.com/',
  Depth: 'https://depth.sailscasts.com/',
  'Klean UI': 'https://docs.sailscasts.com/klean-ui/',
  Pellicule: 'https://docs.sailscasts.com/pellicule/',
}

test('homepage preserves its original projects and adds verified public projects', async ({
  page,
}) => {
  await page.goto('/')
  const grid = page.locator('section').filter({
    has: page.getByRole('heading', { name: 'Featured Projects & Initiatives' }),
  })
  await expect(grid.getByRole('heading', { level: 3 }).first()).toHaveText(
    'FLOSSAfrica',
  )
  for (const [name, url] of Object.entries(projects)) {
    const card = grid.locator('article').filter({
      has: page.getByRole('heading', { name, exact: true }),
    })
    await expect(card).toHaveCount(1)
    await expect(card.getByRole('link')).toHaveAttribute('href', url)
  }
  for (const name of [
    'The African Engineer',
    'Sponsorships',
    'Boring JavaScript Stack',
    'Sailscasts',
    'Hagfish',
    'Sailscasts Community',
    'guppy',
    'YouTube',
  ]) {
    await expect(grid.getByRole('heading', { name, exact: true })).toBeVisible()
  }
  await expect(grid.getByRole('heading', { name: 'ChiefLevite' })).toHaveCount(
    0,
  )
})

function luminance(color: string) {
  const rgb = color
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number)
  if (!rgb || rgb.length !== 3) throw new Error('Expected RGB color: ' + color)
  return rgb.reduce((sum, n, i) => {
    const x = n / 255
    return (
      sum +
      [0.2126, 0.7152, 0.0722][i] *
        (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4)
    )
  }, 0)
}

for (const colorScheme of ['light', 'dark'] as const) {
  test(
    'homepage speaking link has AA contrast in ' + colorScheme + ' mode',
    async ({ page }) => {
      await page.emulateMedia({ colorScheme })
      await page.goto('/')
      const link = page.getByRole('link', {
        name: 'Book me to speak',
        exact: true,
      })
      await expect(link).toHaveAttribute('href', '/speaking')
      const contrasting = async () => {
        const colors = await link.evaluate((el) => {
          const style = getComputedStyle(el)
          return [style.color, style.backgroundColor]
        })
        const shades = colors.map(luminance).sort((a, b) => b - a)
        return (shades[0] + 0.05) / (shades[1] + 0.05)
      }
      expect(await contrasting()).toBeGreaterThanOrEqual(4.5)
      await link.hover()
      await expect.poll(contrasting).toBeGreaterThanOrEqual(4.5)
      await link.click()
      await expect(page).toHaveURL(/\/speaking\/?$/)
    },
  )
}
