import { Outlet, useLoaderData } from 'react-router-dom';
import BackendLayout from './_backend-layout';
import FrontendLayout from './_front-layout';

export default function KitchenSinkLayout() {
  const { feature } = useLoaderData() as { feature: 'frontend' | 'backend' };

  const Feature = feature === 'frontend' ? FrontendLayout : BackendLayout;

  return (
    <Feature>
      <h1>Kitchen Sink</h1>
      <Outlet />
    </Feature>
  );
}
