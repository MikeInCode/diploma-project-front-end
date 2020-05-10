import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { ROUTES } from './constants'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useSelector } from 'react-redux'
import { RolesEnum } from '../graphQLTypes'
import { AccessControl } from 'components/accessControl'

const mapState = ({ auth: { isAuthenticated } }: IRootReducer) => ({
  isAuthenticated
})

export const PrivateRoute = React.memo<
  RouteProps & { permissions: RolesEnum[] }
>(({ permissions, ...props }) => {
  const { isAuthenticated } = useSelector(mapState, shallowEqual)

  return isAuthenticated ? (
    <AccessControl permissions={permissions} renderPageNotFound={true}>
      <Route {...props} />
    </AccessControl>
  ) : (
    <Redirect to={ROUTES.LOGIN} />
  )
})
