import React from 'react'
import { Formik, Form, FormikProps } from 'formik'
import { FormValues, ILoginFormProps } from './types'
import { initialValues, validationSchema } from './helpers'
import { Button } from '../../../common/button'
import { Box } from '@material-ui/core'
import { FormikInput, Row } from '../../../common/form'

export const LoginForm = React.memo<ILoginFormProps>(
  ({ isLoading, isInvalidCredentials, onSubmit }) => {
    const formikRef = React.useRef<Formik<FormValues>>()

    React.useEffect(() => {
      if (isInvalidCredentials) {
        formikRef.current.setErrors({
          email: 'Incorrect email or password',
          password: 'Incorrect email or password'
        })
      }
    }, [isInvalidCredentials])

    return (
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        ref={formikRef}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form>
            <Row label="Email:">
              <FormikInput<FormValues> name="email" />
            </Row>
            <Box height={25} />
            <Row label="Password:">
              <FormikInput<FormValues> name="password" type="password" />
            </Row>
            <Box height={25} />
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
  }
)
