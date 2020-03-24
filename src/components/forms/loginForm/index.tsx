import React from 'react'
import { ILoginFormProps, ILoginFormValues } from './types'
import { FormContext, useForm } from 'react-hook-form'
import { Button } from '@material-ui/core'
import { useLoginFormStyles } from './styles'
import { defaultValues, validationSchema } from './helpers'
import { FormTextField } from '../common'
import { useTranslation } from 'react-i18next'

export const LoginForm = React.memo<ILoginFormProps>(
  ({ isLoading, isInvalidCredentials, onSubmit }) => {
    const styles = useLoginFormStyles({})

    const { t } = useTranslation()

    const methods = useForm<ILoginFormValues>({
      mode: 'onChange',
      defaultValues,
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
          <FormTextField
            name="username"
            label={t('usernameLabel')}
            required={true}
          />
          <FormTextField
            name="password"
            label={t('passwordLabel')}
            required={true}
            type="password"
          />
          <Button
            type="submit"
            disabled={!methods.formState.isValid || isLoading}
            variant="contained"
            color="primary"
          >
            {t('loginLabel')}
          </Button>
        </form>
      </FormContext>
    )
  }
)
