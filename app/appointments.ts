export type Appointment = { id: number; title: string };

function buildAppointments() {
  const items: Appointment[] = [];

  for (let index = 1; index <= 160; index += 1) {
    items.push({ id: index, title: `Session ${index}` });
  }

  return items;
}

export const appointments = buildAppointments();
