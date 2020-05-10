import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
import {
  Chat,
  Home,
  Login,
  PageNotFound,
  Profile,
  Students,
  Subjects,
  Teachers
} from './routes'
import { ROUTES } from './constants'
import { PrivateRoute } from './privateRoute'
import { Header } from 'components/header'
import { DrawerSwitcher } from 'components/drawers'
import { RolesEnum } from '../graphQLTypes'

export const AppRouter = React.memo<{ history }>(({ history }) => (
  <ConnectedRouter history={history}>
    <DrawerSwitcher />
    <Header />
    <Switch>
      <Route exact={true} path={ROUTES.LOGIN} render={Login} />
      <PrivateRoute
        exact={true}
        path={ROUTES.HOME}
        render={Home}
        permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER, RolesEnum.STUDENT]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.PROFILE}
        render={Profile}
        permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER, RolesEnum.STUDENT]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.PROFILE_EDIT}
        render={Profile}
        permissions={[RolesEnum.ADMIN]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.STUDENTS}
        render={Students}
        permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.TEACHERS}
        render={Teachers}
        permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER, RolesEnum.STUDENT]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.SUBJECTS}
        render={Subjects}
        permissions={[RolesEnum.STUDENT]}
      />
      <PrivateRoute
        exact={true}
        path={ROUTES.CHAT}
        render={Chat}
        permissions={[RolesEnum.ADMIN, RolesEnum.TEACHER, RolesEnum.STUDENT]}
      />
      <Route exact={true} path={ROUTES.NOT_FOUND} render={PageNotFound} />
    </Switch>
  </ConnectedRouter>
))
