import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import { Home, About } from 'pages'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
  </Switch>
)

export default Routes
