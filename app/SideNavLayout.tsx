'use client';

import { useSearchParams } from 'next/navigation.js';
import type { ReactNode } from 'react';

export default function SideNavLayout({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const isSidebarOpen = searchParams.has('editId');

  const widths = isSidebarOpen
    ? { left: '180px', main: 'calc(100vw - 180px - 280px - 20px)' }
    : { left: '240px', main: 'calc(100vw - 240px - 20px)' };

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <nav
        style={{
          width: widths.left,
          borderRight: '1px solid #eee',
          padding: 12,
        }}
      >
        <div>Side nav</div>
        <div>Reacts to sidebar open</div>
      </nav>
      <main
        data-sidebar-open={isSidebarOpen}
        style={{
          flex: 1,
          maxWidth: widths.main,
          minHeight: '80vh',
          border: '1px solid #eee',
          padding: 16,
        }}
      >
        {children}
      </main>
    </div>
  );
}
