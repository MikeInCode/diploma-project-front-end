import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from 'common/pageWrapper'
import { ProfileForm } from 'components/forms/profileForm'
import { IProfileFormValues } from 'components/forms/profileForm/types'
import { IRootReducer } from 'modules/types'
import {
  getProfileAction,
  updateProfileAction,
  updateUserAction
} from 'modules/profile'
import { useMount } from 'react-use'
import { useParams } from 'react-router-dom'

const mapState = ({
  profile: { user, isLoading, isProfileUpdating },
  university: { isAcademicUnitsLoading }
}: IRootReducer) => ({
  user,
  isLoading,
  isProfileUpdating,
  isAcademicUnitsLoading
})

const Profile = React.memo(() => {
  const {
    user,
    isLoading,
    isProfileUpdating,
    isAcademicUnitsLoading
  } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  useMount(() => {
    dispatch(getProfileAction.started({ ...(id ? { id } : {}) }))
  })

  const handleSubmit = React.useCallback(
    (values: IProfileFormValues) => {
      const {
        institute,
        speciality,
        telegram,
        username,
        course,
        ...input
      } = values
      return id
        ? dispatch(
            updateUserAction.started({
              id,
              input
            })
          )
        : dispatch(
            updateProfileAction.started({
              input: {
                image: input.image,
                email: input.email,
                phone: input.phone
              }
            })
          )
    },
    [dispatch, id]
  )

  return (
    <PageWrapper isLoading={isLoading || isAcademicUnitsLoading || !user}>
      <ProfileForm
        user={user}
        onSubmit={handleSubmit}
        isProfileUpdating={isProfileUpdating}
      />
    </PageWrapper>
  )
})

export default Profile
