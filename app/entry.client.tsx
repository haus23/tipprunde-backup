import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './styles.css';
import { ThemeProvider } from '#utils/theme/theme.client';
import router from './routes';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('Missing #root element in body!');
}

createRoot(rootContainer).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
