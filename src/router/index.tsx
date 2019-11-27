import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch } from 'react-router'
import { Home, Login } from './routes'
import { ROUTES } from './constants'
import { PrivateRoute } from './privateRoute'
import { PublicRoute } from './publicRoute'

export const AppRouter = React.memo<{ history }>(({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <PrivateRoute exact={true} path={ROUTES.HOME} render={Home} />
      <PublicRoute exact={true} path={ROUTES.LOGIN} render={Login} />
      <PublicRoute
        exact={true}
        path={ROUTES.NOT_FOUND}
        render={() => <div>Not Found Page</div>}
      />
    </Switch>
  </ConnectedRouter>
))
