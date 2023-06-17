import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { SetContextProvider } from './contexts/SetContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SetContextProvider>
    <App />
  </SetContextProvider>
);

