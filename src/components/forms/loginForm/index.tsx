import React from 'react'
import { Formik, Form, Field, FormikProps, FieldProps } from 'formik'
import { FormValues } from './types'
import { initialValues, validationSchema } from './helpers'
import { Input } from '../../../common/input'
import { Button } from '../../../common/button'
import { Box } from '@material-ui/core'
import { getErrorMessage } from '../../../utils'
import { useDispatch } from 'react-redux'
import { onLoginAction } from '../../../modules/auth'

export const LoginForm = React.memo(() => {
  const dispatch = useDispatch()
  const onSubmit = React.useCallback(
    (values: FormValues) => dispatch(onLoginAction.started(values)),
    [dispatch]
  )
  return (
    <Formik
      onSubmit={onSubmit}
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
          <Button
            type="submit"
            fullWidth={true}
            disabled={!formikProps.isValid}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  )
})
