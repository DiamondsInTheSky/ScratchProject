import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './ReduxClient/components/App';
import './client/styles/styles.scss';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('index')
);