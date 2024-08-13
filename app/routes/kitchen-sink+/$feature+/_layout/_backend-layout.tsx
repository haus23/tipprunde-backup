import type { ReactNode } from 'react';

export default function BackendLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2>Backend-Layout</h2>
      {children}
    </>
  );
}
