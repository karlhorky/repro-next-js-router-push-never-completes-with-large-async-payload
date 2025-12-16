import { Suspense } from 'react';
import AppointmentList from '../AppointmentList.tsx';
import { appointments } from '../appointments.ts';
import Sidebar from '../Sidebar.tsx';

type Props = {
  params: { rootSlug: string };
};

export default async function CohortPage(props: Props) {
  // Comment this out and `pnpm build && pnpm start` to see bug disappear
  await fakeDbCall();

  return (
    <main style={{ display: 'grid', gap: 16, maxWidth: 1000 }}>
      <h1>Schedule for {props.params.rootSlug}</h1>
      <Suspense fallback={<div>Loading appointments…</div>}>
        <AppointmentList appointments={appointments} />
      </Suspense>
      <Sidebar appointments={appointments} />
    </main>
  );
}

async function fakeDbCall() {
  // Mimic Postgres.js latency
  await new Promise((resolve) => {
    setTimeout(resolve, 150);
  });
}
