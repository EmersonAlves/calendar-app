import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './contexts/app';
import './index.css';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
