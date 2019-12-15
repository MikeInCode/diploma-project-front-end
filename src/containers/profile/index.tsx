import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { PageWrapper } from '../../common/pageWrapper'
import { ProfileForm } from '../../components/forms/profileForm'
import { FormValues } from '../../components/forms/profileForm/types'
import { updateProfileAction } from '../../modules/auth'
import { getVariables } from '../../components/forms/profileForm/adapter'
import {
  getCoursesAction,
  getGroupsAction,
  getSpecialtiesAction
} from '../../modules/user'

const mapState = ({
  auth: { isLoading, isProfileUpdating, user },
  user: {
    specialities,
    isSpecialitiesLoading,
    courses,
    isCoursesLoading,
    groups,
    isGroupsLoading
  }
}: IRootReducer) => ({
  isLoading,
  isProfileUpdating,
  user,
  specialities,
  isSpecialitiesLoading,
  courses,
  isCoursesLoading,
  groups,
  isGroupsLoading
})

const Profile = React.memo(() => {
  const {
    isLoading,
    isProfileUpdating,
    user,
    specialities,
    isSpecialitiesLoading,
    courses,
    isCoursesLoading,
    groups,
    isGroupsLoading
  } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    (values: FormValues) =>
      dispatch(updateProfileAction.started(getVariables(values))),
    [dispatch]
  )

  const handleSpecialitiesFetching = React.useCallback(
    () => specialities.length === 0 && dispatch(getSpecialtiesAction.started()),
    [dispatch, specialities.length]
  )

  const handleCoursesFetching = React.useCallback(
    () => courses.length === 0 && dispatch(getCoursesAction.started()),
    [dispatch, courses.length]
  )

  const handleGroupsFetching = React.useCallback(
    () => groups.length === 0 && dispatch(getGroupsAction.started()),
    [dispatch, groups.length]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <ProfileForm
        user={user}
        onSubmit={handleSubmit}
        isProfileUpdating={isProfileUpdating}
        specialities={{
          options: specialities,
          isLoading: isSpecialitiesLoading,
          onStartFetching: handleSpecialitiesFetching
        }}
        courses={{
          options: courses,
          isLoading: isCoursesLoading,
          onStartFetching: handleCoursesFetching
        }}
        groups={{
          options: groups,
          isLoading: isGroupsLoading,
          onStartFetching: handleGroupsFetching
        }}
      />
    </PageWrapper>
  )
})

export default Profile
