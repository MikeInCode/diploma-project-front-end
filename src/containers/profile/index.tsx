import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from '../../common/pageWrapper'
import { ProfileForm } from '../../components/forms/profileForm'
import { FormValues } from '../../components/forms/profileForm/types'
import { updateProfileAction } from '../../modules/auth'
import { getVariables } from '../../components/forms/profileForm/adapter'

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
    (values: FormValues) =>
      dispatch(updateProfileAction.started(getVariables(values))),
    [dispatch]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <ProfileForm
        user={user}
        onSubmit={handleSubmit}
        isProfileUpdating={isProfileUpdating}
      />
    </PageWrapper>
  )
})

export default Profile
