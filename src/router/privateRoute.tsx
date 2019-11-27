import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { ROUTES } from './constants'
import { getToken } from '../utils/token'

export const PrivateRoute = React.memo<RouteProps>(props => {
  const allowed = React.useMemo(() => !!getToken(), [])
  return allowed ? <Route {...props} /> : <Redirect to={ROUTES.LOGIN} />
})
