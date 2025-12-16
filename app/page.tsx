import Link from 'next/link.js';

export default function Page() {
  return (
    <main style={{ display: 'grid', gap: 12 }}>
      <h1>Sidebar reproduction v2</h1>
      <div>Use the link below to load the long list.</div>
      <Link href="/pern-demo">Go to /pern-demo</Link>
    </main>
  );
}
