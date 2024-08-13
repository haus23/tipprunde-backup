import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('Missing #root element in body!');
}

createRoot(rootContainer).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
