import React, { PropsWithChildren } from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useSelector } from 'react-redux'
import { IAccessControlProps } from './types'

const mapState = ({ auth: { user } }: IRootReducer) => user

export const AccessControl = React.memo<PropsWithChildren<IAccessControlProps>>(
  ({ permissions, children }) => {
    const user = useSelector(mapState, shallowEqual)

    if (
      !permissions ||
      (Array.isArray(permissions) && permissions.includes(user?.role))
    ) {
      return <>{children}</>
    }

    return null
  }
)
