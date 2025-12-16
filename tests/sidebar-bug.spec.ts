import { expect, test } from '@playwright/test';

const baseUrl = 'http://localhost:3000';

test('sidebar toggles URL and DOM state on repeated opens/closes', async ({
  page,
}) => {
  test.setTimeout(180000);
  const cohortSlug = 'pern-demo';
  const expectationTimeout = 10000;
  const main = page.locator('main[data-sidebar-open]');

  await page.goto(`${baseUrl}/${cohortSlug}`);

  await expect(
    page.getByRole('heading', { name: `Schedule for ${cohortSlug}` }),
  ).toBeVisible({ timeout: expectationTimeout });
  await expect(main).toHaveAttribute('data-sidebar-open', 'false', {
    timeout: expectationTimeout,
  });

  const editButtons = page.getByRole('button', { name: 'Edit', exact: true });

  for (let i = 0; i < 20; i += 1) {
    const appointmentId = (i % 2) + 1;
    await editButtons.nth(appointmentId - 1).click();

    await expect(page).toHaveURL(
      `${baseUrl}/${cohortSlug}?editId=${appointmentId}`,
      { timeout: expectationTimeout },
    );
    await expect(main).toHaveAttribute('data-sidebar-open', 'true', {
      timeout: expectationTimeout,
    });

    await page.getByRole('button', { name: 'Close edit sidebar' }).click();

    await expect(page).toHaveURL(`${baseUrl}/${cohortSlug}`, {
      timeout: expectationTimeout,
    });
    await expect(main).toHaveAttribute('data-sidebar-open', 'false', {
      timeout: expectationTimeout,
    });
  }
});
