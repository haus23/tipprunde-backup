import type { ReactNode } from 'react';

import { FrontendHeader } from './frontend-header';

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <FrontendHeader />
      {children}
    </>
  );
}
