import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from './constants'
import { IRootReducer } from '../modules/types'
import { shallowEqual, useSelector } from 'react-redux'

const mapState = ({ auth: { isAuthenticated } }: IRootReducer) => ({
  isAuthenticated
})

export const PrivateRoute = React.memo<RouteProps>(props => {
  const { isAuthenticated } = useSelector(mapState, shallowEqual)

  return isAuthenticated ? <Route {...props} /> : <Redirect to={ROUTES.LOGIN} />
})
