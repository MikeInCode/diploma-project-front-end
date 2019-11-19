import React from 'react'
import { InputBase as MuiInputBase } from '@material-ui/core'
import { useInputClasses, useInputStyles } from './styles'
import { IInputProps } from './types'
import { Typography } from '../typography'

export const Input = React.memo<IInputProps>(({ errorMessage, ...rest }) => {
  const classes = useInputClasses({})
  const styles = useInputStyles({})
  return (
    <div className={styles.wrapper}>
      <MuiInputBase
        classes={classes}
        fullWidth={true}
        error={!!errorMessage}
        {...rest}
      />
      {errorMessage && (
        <Typography variant="body2" className={styles.errorMessage}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
