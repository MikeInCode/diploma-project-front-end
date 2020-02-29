import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from '../../common/pageWrapper'
import { ProfileForm } from '../../components/forms/profileForm'
import { IProfileFormValues } from '../../components/forms/profileForm/types'
import { updateProfileAction } from '../../modules/auth'
import { adaptValuesToForm, adaptValuesToResponse } from '../../components/forms/profileForm/helpers'

const mapState = ({
  auth: { isLoading, isProfileUpdating, user }
}: IRootReducer) => ({
  isLoading,
  isProfileUpdating,
  user
})

const Profile = React.memo(() => {
  const { isLoading, isProfileUpdating, user } = useSelector(
    mapState,
    shallowEqual
  )

  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    (values: IProfileFormValues) =>
      dispatch(updateProfileAction.started(adaptValuesToResponse(values))),
    [dispatch]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <ProfileForm
        initialValues={adaptValuesToForm(user)}
        onSubmit={handleSubmit}
        isProfileUpdating={isProfileUpdating}
      />
    </PageWrapper>
  )
})

export default Profile
