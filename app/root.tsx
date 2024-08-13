import { Outlet } from 'react-router-dom';

export default function AppRoot() {
  return (
    <div className="relative isolate min-h-svh w-full">
      <Outlet />
    </div>
  );
}
