import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'tests',
  forbidOnly: true,
  use: {
    baseURL: 'http://localhost:3000',
    ...devices['Desktop Chrome'],
    channel: 'chrome',
    trace: 'on-first-retry',
  },
  webServer: [
    {
      command: 'pnpm build && pnpm start',
      port: 3000,
      stdout: 'pipe',
    },
  ],
};

export default config;
