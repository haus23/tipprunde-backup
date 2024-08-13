import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('Missing #root element in body!');
}

createRoot(rootContainer).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
