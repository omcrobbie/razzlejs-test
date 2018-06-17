import Home from '../client/containers/home'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import Post from '../client/containers/post';
import About from '../client/containers/about';
import Shows from '../client/containers/shows';
import Show from '../client/containers/show'

const App = ({store}) => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/about" component={About} />
      <Route exact path="/shows" component={Shows} />
      <Route path="/shows/:id" component={Show} />
    </Switch>
  </Provider>
)
export default App