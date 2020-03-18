import React from 'react'
import { IProfileFormProps, IProfileFormValues } from './types'
import { FormContext, useForm } from 'react-hook-form'
import { Button, Grid, MenuItem } from '@material-ui/core'
import { Avatar } from '../../../common/avatar'
import { useProfileFormStyles } from './styles'
import { FormTextField } from '../common'
import { validationSchema } from './helpers'
import { FormSelect } from '../common/formSelect'
import { IRootReducer } from '../../../modules/types'
import { shallowEqual, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const mapState = ({
  university: { institutes, departments, specialities, groups }
}: IRootReducer) => ({
  institutes,
  departments,
  specialities,
  groups
})

export const ProfileForm = React.memo<IProfileFormProps>(
  ({ initialValues, onSubmit, isProfileUpdating }) => {
    const { t } = useTranslation()

    const { institutes, departments, specialities, groups } = useSelector(
      mapState,
      shallowEqual
    )

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
      defaultValues: initialValues,
      validationSchema
    })

    React.useEffect(() => {
      methods.reset({ ...initialValues })
      // eslint-disable-next-line
    }, [initialValues])

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
                  {t('uploadImageLabel')}
                </Button>
              </Grid>
            </Grid>
            <Grid container={true} item={true} xs={9} spacing={3}>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="firstName"
                  label={t('firstNameLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="phone"
                  label={t('phoneLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="lastName"
                  label={t('lastNameLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="email"
                  label={t('emailLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="patronymicName"
                  label={t('patronymicNameLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="telegram"
                  label={t('telegramLabel')}
                  fullWidth={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormSelect
                  name="institute"
                  label={t('instituteLabel')}
                  fullWidth={true}
                >
                  {institutes.map(institute => (
                    <MenuItem key={institute.id} value={institute.id}>
                      {institute.name}
                    </MenuItem>
                  ))}
                </FormSelect>
              </Grid>
              <Grid item={true} xs={6} />
              <Grid item={true} xs={6}>
                <FormSelect
                  name="speciality"
                  label={t('specialityLabel')}
                  fullWidth={true}
                >
                  {specialities.map(speciality => (
                    <MenuItem key={speciality.id} value={speciality.id}>
                      {`${speciality.code} ${speciality.name}`}
                    </MenuItem>
                  ))}
                </FormSelect>
              </Grid>
              <Grid item={true} xs={6} />
              <Grid item={true} xs={6}>
                <FormSelect
                  name="group"
                  label={t('groupLabel')}
                  fullWidth={true}
                >
                  {groups.map(group => (
                    <MenuItem key={group.id} value={group.id}>
                      {group.name}
                    </MenuItem>
                  ))}
                </FormSelect>
              </Grid>
              <Grid item={true} xs={6} />
              <Grid item={true} xs={6}>
                <FormTextField
                  name="course"
                  label={t('courseLabel')}
                  fullWidth={true}
                />
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
                  {t('updateProfileLabel')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </FormContext>
    )
  }
)
