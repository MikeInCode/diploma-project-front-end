import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router'
import { ROUTES } from './constants'
import { getToken } from '../utils/token'

export const PublicRoute = React.memo<RouteProps>(props => {
  const allowed = React.useMemo(
    () => !getToken() || props.path === ROUTES.NOT_FOUND,
    [props.path]
  )
  return allowed ? <Route {...props} /> : <Redirect to={ROUTES.HOME} />
})
