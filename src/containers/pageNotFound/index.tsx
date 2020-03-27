import React from 'react'
import pageNotFound from 'assets/page-not-found.png'
import { usePageNotFoundStyles } from './styles'

const PageNotFound = React.memo(() => {
  const styles = usePageNotFoundStyles({})
  return (
    <div className={styles.wrapper}>
      <img src={pageNotFound} alt="pageNotFound" />
    </div>
  )
})

export default PageNotFound
