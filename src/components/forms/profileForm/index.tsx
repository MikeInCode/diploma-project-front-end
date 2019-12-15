import React from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { FormValues, IProfileFormProps } from './types'
import { getInitialValues, validationSchema } from './helpers'
import { Button } from '../../../common/button'
import { FormikInput, FormikSelect, Row } from '../../../common/form'
import { useProfileFormStyles } from './styles'
import { Typography } from '../../../common/typography'
import { Avatar } from '../../../common/avatar'

export const ProfileForm = React.memo<IProfileFormProps>(
  ({ user, onSubmit, isProfileUpdating, specialities, courses, groups }) => {
    const styles = useProfileFormStyles({})
    return (
      <Formik
        onSubmit={onSubmit}
        initialValues={getInitialValues(user)}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formikProps: FormikProps<FormValues>) => (
          <Form className={styles.form}>
            <div className={styles.leftPart}>
              <Avatar
                src=""
                firstName={user.firstName}
                lastName={user.lastName}
                variant="square"
                className={styles.avatar}
              />
              <Button className={styles.uploadImageBtn} fullWidth={true}>
                Upload image
              </Button>
            </div>
            <div className={styles.rightPart}>
              <Typography variant="h3">Main information</Typography>
              <Typography variant="h3">Contact information</Typography>
              <Row label="First name:">
                <FormikInput<FormValues> name="firstName" />
              </Row>
              <Row label="Phone:">
                <FormikInput<FormValues> name="phone" />
              </Row>
              <Row label="Last name:">
                <FormikInput<FormValues> name="lastName" />
              </Row>
              <Row label="Email:">
                <FormikInput<FormValues> name="email" />
              </Row>
              <Row label="Specialty:">
                <FormikSelect<FormValues>
                  name="specialty"
                  options={specialities.options}
                  isLoading={specialities.isLoading}
                  onFocus={specialities.onStartFetching}
                />
              </Row>
              <Row label="Telegram:">
                <FormikInput<FormValues> name="telegram" />
              </Row>
              <Row label="Course:">
                <FormikSelect<FormValues>
                  name="course"
                  options={courses.options}
                  isLoading={courses.isLoading}
                  onFocus={courses.onStartFetching}
                />
              </Row>
              <Row label="Group:">
                <FormikSelect<FormValues>
                  name="group"
                  options={groups.options}
                  isLoading={groups.isLoading}
                  onFocus={groups.onStartFetching}
                />
              </Row>
              <Button
                type="submit"
                disabled={!formikProps.isValid || isProfileUpdating}
              >
                Update profile
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
)
