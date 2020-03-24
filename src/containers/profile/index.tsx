import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from '../../common/pageWrapper'
import { ProfileForm } from '../../components/forms/profileForm'
import { IProfileFormValues } from '../../components/forms/profileForm/types'
import { updateProfileAction } from '../../modules/auth'
import {
  adaptValuesToForm,
  adaptValuesToResponse
} from '../../components/forms/profileForm/helpers'

const mapState = ({
  auth: { isLoading: isUserLoading, isProfileUpdating, user },
  university: { isLoading: isUniversityLoading }
}: IRootReducer) => ({
  isUserLoading,
  isProfileUpdating,
  user,
  isUniversityLoading
})

const Profile = React.memo(() => {
  const {
    isUserLoading,
    isProfileUpdating,
    user,
    isUniversityLoading
  } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const initialValues = React.useMemo(() => adaptValuesToForm(user), [user])

  const handleSubmit = React.useCallback(
    (values: IProfileFormValues) =>
      dispatch(updateProfileAction.started(adaptValuesToResponse(values))),
    [dispatch]
  )

  return (
    <PageWrapper isLoading={isUserLoading || isUniversityLoading}>
      <ProfileForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        isProfileUpdating={isProfileUpdating}
        userRole={user?.role}
      />
    </PageWrapper>
  )
})

export default Profile
