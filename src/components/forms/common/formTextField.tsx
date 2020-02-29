import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'
import { useFormFieldErrors } from './hooks'

export const FormTextField = React.memo<TextFieldProps>(props => {
  const { register, errors } = useFormContext()

  const { error, helperText } = useFormFieldErrors(props.name, errors)

  return (
    <TextField
      {...props}
      inputRef={register}
      error={error}
      helperText={helperText}
    />
  )
})
