import React from 'react'
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from 'common/pageWrapper'
import { ProfileForm } from 'components/forms/profileForm'
import { IProfileFormValues } from 'components/forms/profileForm/types'
import { IRootReducer } from 'modules/types'
import { getAcademicUnitsAction } from 'modules/university'
import {
  getProfileAction,
  updateProfileAction,
  updateUserAction
} from 'modules/profile'
import { useMount } from 'react-use'
import { useParams } from 'react-router-dom'

const mapState = ({
  profile: { user, isLoading, isProfileUpdating },
  university: { academicUnits, isAcademicUnitsLoading }
}: IRootReducer) => ({
  user,
  isLoading,
  isProfileUpdating,
  academicUnits,
  isAcademicUnitsLoading
})

const Profile = React.memo(() => {
  const {
    user,
    isLoading,
    isProfileUpdating,
    academicUnits,
    isAcademicUnitsLoading
  } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  useMount(() => {
    batch(() => {
      dispatch(getProfileAction.started({ ...(id ? { id } : {}) }))
      !academicUnits && dispatch(getAcademicUnitsAction.started())
    })
  })

  const handleSubmit = React.useCallback(
    (values: IProfileFormValues) => {
      const {
        institute,
        speciality,
        username,
        course,
        telegram,
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
                telegram,
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
    <PageWrapper isLoading={isLoading || isAcademicUnitsLoading}>
      {user && academicUnits && (
        <ProfileForm
          user={user}
          academicUnits={academicUnits}
          onSubmit={handleSubmit}
          isProfileUpdating={isProfileUpdating}
        />
      )}
    </PageWrapper>
  )
})

export default Profile
