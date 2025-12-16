'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';

export default function EditButton(props: { appointmentId: number }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <button
      type="button"
      onClick={() => {
        const next = new URLSearchParams(searchParams);
        next.set('editId', String(props.appointmentId));
        const queryString = next.toString();
        const href = queryString ? `${pathname}?${queryString}` : pathname;
        router.push(href, { scroll: false });
      }}
    >
      Edit
    </button>
  );
}
