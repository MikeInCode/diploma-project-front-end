import React from 'react'
import { ILoginFormProps, ILoginFormValues } from './types'
import { FormContext, useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'
import { useLoginFormStyles } from './styles'
import { validationSchema } from './helpers'
import { FormTextField } from '../common'

export const LoginForm = React.memo<ILoginFormProps>(
  ({ isLoading, isInvalidCredentials, onSubmit }) => {
    const styles = useLoginFormStyles({})

    const methods = useForm<ILoginFormValues>({
      mode: 'onChange',
      validationSchema
    })

    React.useEffect(() => {
      if (isInvalidCredentials) {
        Object.keys(methods.getValues()).map(key =>
          methods.setError(key, 'credentials', 'Invalid credentials')
        )
      }
      // eslint-disable-next-line
    }, [isInvalidCredentials])

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.form}>
          <FormTextField name="email" label="Email" required={true} />
          <FormTextField name="password" label="Password" required={true} />
          <Button
            type="submit"
            disabled={!methods.formState.isValid || isLoading}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </FormContext>
    )
  }
)
