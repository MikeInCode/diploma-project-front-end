import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import { Controller, useFormContext } from 'react-hook-form'
import { getFormErrors } from './helpers'

export const FormSelect = React.memo<TextFieldProps>(({ name, ...rest }) => {
  const { control, errors, triggerValidation } = useFormContext()

  const { error, helperText } = getFormErrors(name, errors)

  const handleBlur = React.useCallback(() => {
    triggerValidation(name)
  }, [name, triggerValidation])

  return (
    <Controller
      name={name}
      as={
        <TextField
          {...rest}
          select={true}
          error={error}
          helperText={helperText}
        />
      }
      control={control}
      onBlur={handleBlur}
      defaultValue=""
    />
  )
})
