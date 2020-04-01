import React from 'react'
import { CircularProgress, Container } from '@material-ui/core'
import { IPageWrapperProps } from './types'
import { usePageWrapperClasses } from './styles'

export const PageWrapper = React.memo<IPageWrapperProps>(
  ({ children, isLoading, ...rest }) => {
    const classes = usePageWrapperClasses({})
    return (
      <Container classes={{ root: classes.root }} fixed={true} {...rest}>
        {isLoading ? (
          <div className={classes.progressWrapper}>
            <CircularProgress />
          </div>
        ) : (
          !!children && children
        )}
      </Container>
    )
  }
)
