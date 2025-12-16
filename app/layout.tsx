import type { ReactNode } from 'react';

export const metadata = { title: 'Sidebar Repro 2' };

// To avoid <Suspense> around <SideNavLayout>
export const dynamic = 'force-dynamic';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
