import React, { Component } from 'react'
import styled from 'react-emotion'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

export class AppRouter extends Component {
  render() {
    return (
      <View>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </View>
    )
  }
}

export default AppRouter

const View = styled('div')`
  flex: 1;
  > div {
    height: 100%;
    width: 100%;
    padding: 2rem;
  }
`
