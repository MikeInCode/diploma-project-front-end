import React from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { FormValues, IProfileFormProps } from './types'
import { getInitialValues, validationSchema } from './helpers'
import { Button } from '../../../common/button'
import { Box } from '@material-ui/core'
import { FormikInput, Row } from '../../../common/form'
import { useProfileFormStyles } from './styles'
import { Typography } from '../../../common/typography'
import { Avatar } from '../../../common/avatar'

export const ProfileForm = React.memo<IProfileFormProps>(
  ({ user, onSubmit, isProfileUpdating }) => {
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
              <Button className={styles.loadImageBtn} fullWidth={true}>
                Upload image
              </Button>
            </div>
            <div className={styles.rightPart}>
              <div className={styles.multipleRow}>
                <Typography variant="h3">Main information</Typography>
                <Typography variant="h3">Contact information</Typography>
              </div>
              <div className={styles.multipleRow}>
                <Row label="First name:">
                  <FormikInput<FormValues> name="firstName" />
                </Row>
                <Row label="Phone:">
                  <FormikInput<FormValues> name="phone" />
                </Row>
              </div>
              <div className={styles.multipleRow}>
                <Row label="Last name:">
                  <FormikInput<FormValues> name="lastName" />
                </Row>
                <Row label="Email:">
                  <FormikInput<FormValues> name="email" />
                </Row>
              </div>
              <div className={styles.multipleRow}>
                <Row label="Specialty:">
                  <FormikInput<FormValues> name="specialty" />
                </Row>
                <Row label="Telegram:">
                  <FormikInput<FormValues> name="telegram" />
                </Row>
              </div>
              <div className={styles.multipleRow}>
                <Row label="Course:">
                  <FormikInput<FormValues> name="course" />
                </Row>
                <Box flex={1} />
              </div>
              <div className={styles.multipleRow}>
                <Row label="Group:">
                  <FormikInput<FormValues> name="group" />
                </Row>
                <Box flex={1} />
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={!formikProps.isValid || isProfileUpdating}
                >
                  Update profile
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
)
