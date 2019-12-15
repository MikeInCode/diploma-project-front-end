import React from 'react'
import { Field, FieldProps } from 'formik'
import { Input } from '../input'
import { getErrorMessage } from '../../utils/getErrorMessage'
import { IFormikInputProps } from './types'

export const FormikInput = <T extends {}>({
  name,
  ...rest
}: IFormikInputProps<T>) => (
  <Field name={name}>
    {({ field, form }: FieldProps<T>) => (
      <Input {...field} {...rest} errorMessage={getErrorMessage(name, form)} />
    )}
  </Field>
)
