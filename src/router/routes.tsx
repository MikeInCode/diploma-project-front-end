import React, { lazy, Suspense } from 'react'
import { LinearProgress } from '@material-ui/core'

const LazyLoader = props => {
  const { lazy: LazyComponent, ...rest } = props
  return (
    <Suspense fallback={<LinearProgress />}>
      <LazyComponent {...rest} />
    </Suspense>
  )
}

export const Home = props => (
  <LazyLoader lazy={lazy(() => import('../containers/schedule'))} {...props} />
)

export const Login = props => (
  <LazyLoader lazy={lazy(() => import('../containers/login'))} {...props} />
)

export const Profile = props => (
  <LazyLoader lazy={lazy(() => import('../containers/profile'))} {...props} />
)

export const Students = props => (
  <LazyLoader lazy={lazy(() => import('../containers/students'))} {...props} />
)

export const Teachers = props => (
  <LazyLoader lazy={lazy(() => import('../containers/teachers'))} {...props} />
)

export const Subjects = props => (
  <LazyLoader lazy={lazy(() => import('../containers/subjects'))} {...props} />
)

export const Chat = props => (
  <LazyLoader lazy={lazy(() => import('../containers/chat'))} {...props} />
)

export const PageNotFound = props => (
  <LazyLoader
    lazy={lazy(() => import('../containers/pageNotFound'))}
    {...props}
  />
)
