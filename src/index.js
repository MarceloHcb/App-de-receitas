import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/provider';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>,
  );

serviceWorker.unregister();
