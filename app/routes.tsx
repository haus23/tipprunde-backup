import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/error-boundary.tsx';

import AppRoot from './root.tsx';
import KitchenSinkLayout from './routes/kitchen-sink+/$feature+/_layout/_layout.tsx';
import HomeRoute from './routes/kitchen-sink+/$feature+/index/_home.tsx';

const router = createBrowserRouter([
  {
    element: <AppRoot />,
    children: [
      {
        path: '/kitchen-sink/:feature',
        element: <KitchenSinkLayout />,
        loader: ({ params }) => {
          const feature = params.feature || '';
          if (!['frontend', 'backend'].includes(feature)) {
            throw new Response('Not Found', { status: 404 });
          }
          return { feature };
        },
        children: [
          {
            index: true,
            element: <HomeRoute />,
          },
        ],
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
