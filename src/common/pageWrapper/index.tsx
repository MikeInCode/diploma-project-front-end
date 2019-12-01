import React from 'react'
import { Container } from '@material-ui/core'
import { IPageWrapperProps } from './types'
import { usePageWrapperClasses } from './styles'
import { CircularProgress } from '../circularProgress'

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
          children
        )}
      </Container>
    )
  }
)