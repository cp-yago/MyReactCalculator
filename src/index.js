import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>My React Calculator</h1>
    </div>
    <Calculator />
    <footer>
      <p>Feito por Yago Cunha de Paula</p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
