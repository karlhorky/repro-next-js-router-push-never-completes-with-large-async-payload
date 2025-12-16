import type { ReactNode } from 'react';
import SideNavLayout from '../SideNavLayout.tsx';

export default async function CohortLayout(props: {
  children: ReactNode;
  params: { rootSlug: string };
}) {
  return <SideNavLayout>{props.children}</SideNavLayout>;
}
