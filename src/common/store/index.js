import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import * as Post from './posts'
import * as Show from './shows'

export const getInitialState = async () => {
  const shows = await Show.getInitialState()
  const posts = Post.getInitialState()
  return {
    shows, posts
  }
}
export const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default
      store.replaceReducer(nextReducer);
    });
  }
  return store;
};
