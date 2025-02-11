import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import './firebase';

import { App } from 'App';

import './index.scss';
import 'normalize.css';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
