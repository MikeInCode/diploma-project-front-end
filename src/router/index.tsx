import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  Login,
  Profile,
  Students,
  Teachers,
  PageNotFound
} from './routes'
import { ROUTES } from './constants'
import { PrivateRoute } from './privateRoute'
import { Header } from '../components/header'

export const AppRouter = React.memo<{ history }>(({ history }) => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <PrivateRoute exact={true} path={ROUTES.HOME} render={Home} />
      <PrivateRoute exact={true} path={ROUTES.PROFILE} render={Profile} />
      <Route exact={true} path={ROUTES.LOGIN} render={Login} />
      <PrivateRoute exact={true} path={ROUTES.STUDENTS} render={Students} />
      <PrivateRoute exact={true} path={ROUTES.TEACHERS} render={Teachers} />
      <Route exact={true} path={ROUTES.NOT_FOUND} render={PageNotFound} />
    </Switch>
  </ConnectedRouter>
))
