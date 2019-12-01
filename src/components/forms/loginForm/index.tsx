import React from 'react'
import { Formik, Form, Field, FormikProps, FieldProps } from 'formik'
import { FormValues } from './types'
import { initialValues, validationSchema } from './helpers'
import { Input } from '../../../common/input'
import { Button } from '../../../common/button'
import { Typography } from '../../../common/typography'
import { Box } from '@material-ui/core'
import { getErrorMessage } from '../../../utils/getErrorMessage'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { onLoginAction } from '../../../modules/auth'
import { IRootReducer } from '../../../modules/types'

const mapState = ({
  auth: { isLoading, isInvalidCredentials }
}: IRootReducer) => ({
  isLoading,
  isInvalidCredentials
})

export const LoginForm = React.memo(() => {
  const { isInvalidCredentials, isLoading } = useSelector(
    mapState,
    shallowEqual
  )

  const formikRef = React.useRef<Formik<FormValues>>()

  React.useEffect(() => {
    if (isInvalidCredentials) {
      formikRef.current.setErrors({
        email: 'Incorrect email or password',
        password: 'Incorrect email or password'
      })
    }
  }, [isInvalidCredentials])

  const dispatch = useDispatch()

  const onSubmit = React.useCallback(
    (values: FormValues) => dispatch(onLoginAction.started({ input: values })),
    [dispatch]
  )

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      ref={formikRef}
    >
      {(formikProps: FormikProps<FormValues>) => (
        <Form>
          <Field name="email">
            {({ field, form }: FieldProps<FormValues>) => (
              <>
                <Typography variant="body1">Email:</Typography>
                <Input
                  {...field}
                  errorMessage={getErrorMessage<FormValues>('email', form)}
                />
              </>
            )}
          </Field>
          <Box height={10} />
          <Field name="password">
            {({ field, form }: FieldProps<FormValues>) => (
              <>
                <Typography variant="body1">Password:</Typography>
                <Input
                  {...field}
                  type="password"
                  errorMessage={getErrorMessage<FormValues>('password', form)}
                />
              </>
            )}
          </Field>
          <Box height={10} />
          <Button
            type="submit"
            fullWidth={true}
            disabled={!formikProps.isValid || isLoading}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  )
})
