import React from 'react';
import { hydrate } from 'react-dom';
import { configureStore } from '../common/store';
import App from '../common/App';
import { BrowserRouter } from 'react-router-dom'

const store = configureStore(window.__PRELOADED_STATE__);
const doHydrate = () => {
  hydrate(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
doHydrate()

if (module.hot) {
  module.hot.accept('../common/App', () => {
    doHydrate()
  });
}
