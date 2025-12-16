'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';
import type { Appointment } from './appointments.ts';

export default function Sidebar(props: { appointments: Appointment[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const editIdParam = searchParams.get('editId');
  if (!editIdParam) return null;

  const appointmentId = Number(editIdParam);
  const appointment = props.appointments.find(({ id }) => id === appointmentId);

  function closeSidebar() {
    const next = new URLSearchParams(searchParams);
    next.delete('editId');
    const queryString = next.toString();
    const href = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(href, { scroll: false });
  }

  return (
    <section
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: 280,
        height: '100vh',
        borderLeft: '1px solid #ccc',
        background: 'white',
        padding: 16,
        overflowY: 'auto',
        zIndex: 40,
      }}
    >
      <button
        type="button"
        onClick={closeSidebar}
        style={{ float: 'right' }}
        aria-label="Close edit sidebar"
      >
        ×
      </button>
      <h2>Edit appointment</h2>
      {!appointment ? (
        <div>Appointment not found</div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          <div>
            <div><strong>ID:</strong> {appointment.id}</div>
            <div><strong>Title:</strong> {appointment.title}</div>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            style={{ display: 'grid', gap: 8 }}
          >
            <label style={{ display: 'grid', gap: 4 }}>
              New title
              <input name="title" defaultValue={appointment.title} />
            </label>
            <button type="submit" style={{ justifySelf: 'start' }}>
              Save
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
