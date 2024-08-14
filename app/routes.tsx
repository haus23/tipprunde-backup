import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/error-boundary.tsx';

import ButtonsRoute from '#routes/kitchen-sink+/$feature+/buttons.tsx';
import IconsRoute from '#routes/kitchen-sink+/$feature+/icons.tsx';
import LinksRoute from '#routes/kitchen-sink+/$feature+/links.tsx';
import PopoversRoute from '#routes/kitchen-sink+/$feature+/popovers.tsx';
import AppRoot from './root.tsx';
import RankingRoute from './routes/_foh+/($championship)+/index/_ranking.tsx';
import FohLayout from './routes/_foh+/_layout/_layout.tsx';
import WelcomeRoute from './routes/_foh+/willkommen/_welcome.tsx';
import KitchenSinkLayout from './routes/kitchen-sink+/$feature+/_layout/_layout.tsx';
import HomeRoute from './routes/kitchen-sink+/$feature+/index/_home.tsx';

const router = createBrowserRouter([
  {
    element: <AppRoot />,
    children: [
      {
        path: '/',
        element: <FohLayout />,
        children: [
          {
            path: ':championship?',
            children: [
              {
                index: true,
                element: <RankingRoute />,
              },
            ],
          },
          {
            path: 'willkommen',
            element: <WelcomeRoute />,
          },
        ],
      },
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
          {
            path: 'buttons',
            element: <ButtonsRoute />,
          },
          {
            path: 'icons',
            element: <IconsRoute />,
          },
          {
            path: 'links',
            element: <LinksRoute />,
          },
          {
            path: 'popovers',
            element: <PopoversRoute />,
          },
        ],
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

export default router;
