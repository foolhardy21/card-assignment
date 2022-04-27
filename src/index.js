import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardProvider } from './contexts/card.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CardProvider>
    <App />
  </CardProvider>
);

