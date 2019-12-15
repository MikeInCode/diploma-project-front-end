import React from 'react'
import { Field, FieldProps } from 'formik'
import { getErrorMessage } from '../../utils/getErrorMessage'
import { IFormikSelectProps } from './types'
import { Select } from '../../components/select'

export const FormikSelect = <T extends {}>({
  name,
  ...rest
}: IFormikSelectProps<T>) => (
  <Field name={name}>
    {({ field, form }: FieldProps<T>) => {
      const handleChange = value => form.setFieldValue(field.name, value)
      const handleBlur = () => form.setFieldTouched(field.name)
      return (
        <Select
          {...field}
          {...rest}
          onChange={handleChange}
          onBlur={handleBlur}
          errorMessage={getErrorMessage(name, form)}
        />
      )
    }}
  </Field>
)
