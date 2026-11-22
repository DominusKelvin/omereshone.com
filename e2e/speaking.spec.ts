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
  await expect(page.getByText('₦350,000')).toBeVisible()
  await expect(page.getByText('Lagos', { exact: true })).toBeVisible()
  await expect(page.getByText('₦500,000')).toBeVisible()
  await expect(page.getByText('₦700,000')).toBeVisible()
  await expect(page.getByText('₦250,000')).toBeVisible()
  await expect(
    page.getByText('All my speaking engagements are paid, except Sailsconf.'),
  ).toBeVisible()
  await expect(page.getByText('Starting in 2027')).toHaveCount(0)
  await expect(
    page.getByRole('heading', { name: 'You Want Originality Too Early' }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'No Evidence This Could Work' }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: 'Earn Influence Before You Have Authority',
    }),
  ).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Build Something Worth Growing' }),
  ).toBeVisible()
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
