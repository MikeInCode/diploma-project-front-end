import React from 'react'
import { Formik, Form, Field, FormikProps, FieldProps, getIn } from 'formik'
import { FormValues } from './types'
import { initialValues, validationSchema } from './helpers'
import { Input } from '../../../common/input'
import { Button } from '../../../common/button'
import { Box } from '@material-ui/core'
import { getErrorMessage } from '../../../utils'

export const LoginForm = React.memo(() => (
  <Formik
    onSubmit={null}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    {(formikProps: FormikProps<FormValues>) => (
      <Form>
        <Field name="login">
          {({ field, form }: FieldProps<FormValues>) => (
            <Input
              {...field}
              errorMessage={getErrorMessage<FormValues>('login', form)}
            />
          )}
        </Field>
        <Box height={10} />
        <Field name="password">
          {({ field, form }: FieldProps<FormValues>) => (
            <Input
              {...field}
              errorMessage={getErrorMessage<FormValues>('password', form)}
            />
          )}
        </Field>
        <Box height={10} />
        <Button fullWidth={true} disabled={!formikProps.isValid}>
          Login
        </Button>
      </Form>
    )}
  </Formik>
))
