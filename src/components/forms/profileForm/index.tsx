import React from 'react'
import { IProfileFormProps, IProfileFormValues } from './types'
import { FormContext, useForm } from 'react-hook-form'
import { Button, Grid, MenuItem } from '@material-ui/core'
import { Avatar } from 'common/avatar'
import { useProfileFormStyles } from './styles'
import { FormSelect, FormTextField } from '../common'
import { adaptValuesToForm, validationSchema } from './helpers'
import { useTranslation } from 'react-i18next'
import { useUpdateEffect } from 'react-use'
import { RolesEnum } from '../../../graphQLTypes'
import { useParams } from 'react-router-dom'

export const ProfileForm = React.memo<IProfileFormProps>(
  ({
    user,
    academicUnits: { institutes, ...academicUnits },
    onSubmit,
    isProfileUpdating
  }) => {
    const { t } = useTranslation()

    const { id } = useParams<{ id: string }>()

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
      defaultValues: adaptValuesToForm(user),
      validationSchema: validationSchema(user.role)
    })

    useUpdateEffect(() => {
      methods.reset(adaptValuesToForm(user))
    }, [user])

    const { institute, department, speciality, group } = methods.watch([
      'institute',
      'department',
      'speciality',
      'group'
    ])

    useUpdateEffect(() => {
      methods.setValue('department', '')
    }, [institute])

    useUpdateEffect(() => {
      methods.setValue('speciality', '')
    }, [institute, department])

    useUpdateEffect(() => {
      methods.setValue('group', '')
    }, [speciality])

    const departments = React.useMemo(
      () =>
        academicUnits.departments.filter(item => item.parentId === institute),
      [academicUnits.departments, institute]
    )

    const specialities = React.useMemo(
      () =>
        academicUnits.specialities.filter(speciality =>
          academicUnits.departments.some(
            department =>
              department.parentId === institute &&
              speciality.parentId === department.id
          )
        ),
      [academicUnits.departments, academicUnits.specialities, institute]
    )

    const groups = React.useMemo(
      () => academicUnits.groups.filter(item => item.parentId === speciality),
      [academicUnits.groups, speciality]
    )

    const isFieldDisabled = React.useMemo(() => !id, [id])

    return (
      <FormContext {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container={true} spacing={3} alignItems="flex-start">
            <Grid container={true} item={true} xs={3} spacing={3}>
              <Grid item={true} xs={12}>
                <input name="image" ref={methods.register} type="hidden" />
                <Avatar
                  innerRef={setHeight}
                  src=""
                  firstName={user.firstName}
                  lastName={user.lastName}
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
                  disabled={isFieldDisabled}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="username"
                  label={t('usernameLabel')}
                  fullWidth={true}
                  disabled={true}
                />
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="lastName"
                  label={t('lastNameLabel')}
                  fullWidth={true}
                  disabled={isFieldDisabled}
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
                  name="patronymicName"
                  label={t('patronymicNameLabel')}
                  fullWidth={true}
                  disabled={isFieldDisabled}
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
                <FormSelect
                  name="institute"
                  label={t('instituteLabel')}
                  fullWidth={true}
                  disabled={isFieldDisabled}
                >
                  {institutes.map(institute => (
                    <MenuItem key={institute.id} value={institute.id}>
                      {institute.name}
                    </MenuItem>
                  ))}
                </FormSelect>
              </Grid>
              <Grid item={true} xs={6}>
                <FormTextField
                  name="telegram"
                  label={t('telegramLabel')}
                  fullWidth={true}
                />
              </Grid>
              {user.role === RolesEnum.TEACHER && (
                <>
                  <Grid item={true} xs={6}>
                    <FormSelect
                      name="department"
                      label={t('departmentLabel')}
                      fullWidth={true}
                      disabled={isFieldDisabled}
                    >
                      {departments.map(department => (
                        <MenuItem key={department.id} value={department.id}>
                          {department.name}
                        </MenuItem>
                      ))}
                    </FormSelect>
                  </Grid>
                  <Grid item={true} xs={6} />
                </>
              )}
              {user.role === RolesEnum.STUDENT && (
                <>
                  <Grid item={true} xs={6}>
                    <FormSelect
                      name="speciality"
                      label={t('specialityLabel')}
                      fullWidth={true}
                      disabled={isFieldDisabled}
                    >
                      {specialities.map(speciality => (
                        <MenuItem key={speciality.id} value={speciality.id}>
                          {`${speciality.code} ${speciality.name}`}
                        </MenuItem>
                      ))}
                    </FormSelect>
                  </Grid>
                  <Grid item={true} xs={6} />
                </>
              )}
              {user.role === RolesEnum.STUDENT && (
                <>
                  <Grid item={true} xs={6}>
                    <FormSelect
                      name="group"
                      label={t('groupLabel')}
                      fullWidth={true}
                      disabled={isFieldDisabled}
                    >
                      {groups.map(group => (
                        <MenuItem key={group.id} value={group.id}>
                          {group.name}
                        </MenuItem>
                      ))}
                    </FormSelect>
                  </Grid>
                  <Grid item={true} xs={6} />
                </>
              )}
              {user.role === RolesEnum.STUDENT && (
                <>
                  <Grid item={true} xs={6}>
                    <FormTextField
                      name="course"
                      label={t('courseLabel')}
                      fullWidth={true}
                      disabled={true}
                    />
                  </Grid>
                  <Grid item={true} xs={6} />
                </>
              )}
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
