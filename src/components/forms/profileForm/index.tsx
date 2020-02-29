import React from 'react'
import { IProfileFormProps, IProfileFormValues } from './types'
import { FormContext, useForm } from 'react-hook-form'
import { Button, Grid } from '@material-ui/core'
import { Avatar } from '../../../common/avatar'
import { useProfileFormStyles } from './styles'
import { FormTextField } from '../common'
import { validationSchema } from './helpers'

export const ProfileForm = React.memo<IProfileFormProps>(
  ({ initialValues, onSubmit, isProfileUpdating }) => {
    const [avatarHeight, setAvatarHeight] = React.useState(0)

    const setHeight = React.useCallback((node: HTMLDivElement) => {
      if (node) {
        setAvatarHeight(node.offsetWidth)
      }
    }, [])

    const styles = useProfileFormStyles({
      avatarHeight
    })

    const methods = useForm<IProfileFormValues>({
      mode: 'onChange',
      validationSchema
    })

    React.useEffect(() => {
      methods.reset(initialValues)
      // eslint-disable-next-line
    }, [initialValues])

    console.log(methods.watch('test'))

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container={true} spacing={3} alignItems="flex-start">
            <Grid container={true} item={true} xs={3} spacing={3}>
              <Grid item={true} xs={12}>
                <Avatar
                  innerRef={setHeight}
                  src=""
                  firstName={initialValues.firstName}
                  lastName={initialValues.lastName}
                  variant="square"
                  className={styles.avatar}
                />
              </Grid>
              <Grid item={true} xs={12}>
                <Button color="primary" variant="contained" fullWidth={true}>
                  Upload image
                </Button>
              </Grid>
            </Grid>
            <Grid container={true} item={true} xs={9} spacing={3}>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="firstName"
                  label="First name"
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="phone"
                  label="Phone number"
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="lastName"
                  label="Last name"
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField name="email" label="Email" fullWidth={true} />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="specialty"
                  label="Speciality"
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="telegram"
                  label="Telegram"
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField name="course" label="Course" fullWidth={true} />
              </Grid>
              <Grid item={true} xs={6} />
              <Grid item={true} xs={6}>
                <FormTextField name="group" label="Group" fullWidth={true} />
              </Grid>
              <Grid item={true} xs={6} />
              <Grid item={true} xs={6}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={
                    !methods.formState.isValid ||
                    !methods.formState.dirty ||
                    isProfileUpdating
                  }
                >
                  Update profile
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormContext>
    )
  }
)
