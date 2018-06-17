import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../common/store';
import App from '../common/App';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/App', () => {
    hydrate(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });
}
