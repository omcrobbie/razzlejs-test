import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import * as Post from './posts'
import * as Show from './shows'

const getRootReducer = () => {
  return combineReducers({
    posts: Post.reducer,
    shows: Show.reducer
  })
}
export const getInitialState = async () => {
  const shows = await Show.getInitialState()
  const posts = Post.getInitialState()
  return {
    shows, posts
  }
}
export const configureStore = preloadedState => {
  const store = createStore(
    getRootReducer(),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      store.replaceReducer(getRootReducer());
    });
  }
  return store;
};
