import EditButton from './EditButton.tsx';
import Sidebar from './Sidebar.tsx';
import type { Appointment } from './appointments.ts';

export default async function AppointmentList(props: {
  appointments: Appointment[];
}) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div>Click any edit button to push a query param for the sidebar.</div>
      <div
        style={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        }}
      >
        {props.appointments.map((appointment) => {
          return (
            <div
              key={`appointment-${appointment.id}`}
              style={{
                border: '1px solid #eee',
                padding: 12,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{appointment.title}</div>
                <div style={{ color: '#666' }}>
                  Slug: session-{appointment.id}
                </div>
              </div>
              <EditButton appointmentId={appointment.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
