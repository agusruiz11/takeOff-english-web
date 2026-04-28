
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import { initCalendlyTracking } from '@/utils/calendly';

initCalendlyTracking();

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
