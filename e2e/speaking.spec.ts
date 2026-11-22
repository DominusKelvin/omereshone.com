import { expect, test } from '@playwright/test'

test('links to speaking and distinguishes locations, past work, and booking', async ({
  page,
}) => {
  await page.goto('/')
  await expect(
    page.getByRole('navigation').getByRole('link', { name: 'Speaking' }),
  ).toHaveAttribute('href', /\/speaking\/?$/)
  await page.getByRole('link', { name: 'Book me to speak' }).click()
  await expect(page).toHaveURL(/\/speaking\/?$/)
  await expect(
    page.getByRole('heading', { name: 'Book me to speak.' }),
  ).toBeVisible()
  await expect(page.getByText('From ₦350,000')).toBeVisible()
  await expect(page.getByText('Lagos', { exact: true })).toBeVisible()
  await expect(page.getByText('Quoted in US dollars (USD)')).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Selected past talks' }),
  ).toBeVisible()
  await page.getByRole('link', { name: 'Request a booking' }).click()
  await expect(page).toHaveURL(/#inquire$/)
  await expect(
    page.getByText('Opens an editable draft in your email app.'),
  ).toBeVisible()
})

test.describe('speaking inquiry does not require JavaScript', () => {
  test.use({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } })
  test('provides an editable organizer email draft and fits mobile', async ({
    page,
  }) => {
    await page.goto('/speaking/')
    const href = await page
      .getByRole('link', { name: 'Email a speaking inquiry' })
      .getAttribute('href')
    expect(href).toMatch(/^mailto:[^@?]+@[^?]+\?subject=/)
    const params = new URL(href!).searchParams
    expect(params.get('subject')).toBe('Speaking inquiry for Kelvin')
    expect(params.get('body')).toContain('Event name and website:')
    expect(params.get('body')).toContain('Date and timezone:')
    expect(params.get('body')).toContain('Budget and currency:')
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    )
    expect(overflow).toBe(false)
  })
})
