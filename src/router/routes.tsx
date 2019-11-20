import React, { lazy, Suspense } from 'react'
import { LinearProgress } from '../common/linearProgress'

const WithFallback = props => {
  const { lazy: LazyComponent, ...rest } = props
  return (
    <Suspense fallback={<LinearProgress />}>
      <LazyComponent {...rest} />
    </Suspense>
  )
}

export const Home = props => (
  <WithFallback lazy={lazy(() => import('../containers/home'))} {...props} />
)

export const Login = props => (
  <WithFallback lazy={lazy(() => import('../containers/login'))} {...props} />
)
