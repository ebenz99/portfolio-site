import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import CheckIP from './components/CheckIP';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <CheckIP />
  </React.StrictMode>,
  document.getElementById('CheckIP')
);