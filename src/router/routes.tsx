import React, { lazy, Suspense } from 'react'

const WithFallback = props => {
  const { lazy: LazyComponent, ...rest } = props
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <LazyComponent {...rest} />
    </Suspense>
  )
}

export const Home = props => (
  <WithFallback lazy={lazy(() => import('../containers/home'))} {...props} />
)
