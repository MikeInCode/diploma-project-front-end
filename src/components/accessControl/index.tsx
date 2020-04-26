import React, { PropsWithChildren } from 'react'
import { IRootReducer } from 'modules/types'
import { shallowEqual, useSelector } from 'react-redux'
import { IAccessControlProps } from './types'
import PageNotFound from 'containers/pageNotFound'

const mapState = ({ auth: { user } }: IRootReducer) => user

export const AccessControl = React.memo<PropsWithChildren<IAccessControlProps>>(
  ({ permissions, children, renderPageNotFound }) => {
    const user = useSelector(mapState, shallowEqual)

    if (
      !permissions ||
      (Array.isArray(permissions) && permissions.includes(user?.role))
    ) {
      return <>{children}</>
    }

    return renderPageNotFound ? <PageNotFound /> : null
  }
)
