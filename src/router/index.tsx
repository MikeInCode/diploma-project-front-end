import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'
import { Home } from './routes'
import { ROUTES } from './constants'

export const AppRouter = React.memo<{ history }>(({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact={true} path={ROUTES.HOME} render={Home} />
      <Route
        exact={true}
        path={ROUTES.NOT_FOUND}
        render={() => <div>Not Found Page</div>}
      />
    </Switch>
  </ConnectedRouter>
))
