import Home from '../client/containers/home'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'

const App = ({store}) => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Provider>
)
export default App