import { Outlet } from 'react-router-dom';
import { UiProvider } from '#components/ui/ui-provider';

export default function AppRoot() {
  return (
    <div className="relative isolate min-h-svh w-full">
      <UiProvider>
        <Outlet />
      </UiProvider>
    </div>
  );
}
