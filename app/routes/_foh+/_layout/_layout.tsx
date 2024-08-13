import { Outlet } from 'react-router-dom';

import { Header } from './header';

export default function FohLayout() {
  return (
    <>
      <Header />
      <Outlet />;
    </>
  );
}
