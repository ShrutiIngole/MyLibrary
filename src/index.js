import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import * as serviceWorker from './serviceWorker';

import Desk from './sections/Desk';
import './styles/index.css';


ReactDOM.render(
  
  <React.StrictMode>
    <AlertProvider template={AlertTemplate}>
      <Desk />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
