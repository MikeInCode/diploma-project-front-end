import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'
import { getFormErrors } from './helpers'

export const FormTextField = React.memo<TextFieldProps>(props => {
  const { register, errors } = useFormContext()

  const { error, helperText } = getFormErrors(props.name, errors)

  return (
    <TextField
      {...props}
      inputRef={register}
      error={error}
      helperText={helperText}
    />
  )
})
