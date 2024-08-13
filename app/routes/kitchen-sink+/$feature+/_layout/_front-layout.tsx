import type { ReactNode } from 'react';

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2>Frontend-Layout</h2>
      {children}
    </>
  );
}
