import React from 'react'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useSelector } from 'react-redux'
import { PageWrapper } from '../../common/pageWrapper'

const mapState = ({ auth: { isLoading, user } }: IRootReducer) => ({
  isLoading,
  user
})

const Profile = React.memo(() => {
  const { isLoading, user } = useSelector(mapState, shallowEqual)

  return (
    <PageWrapper isLoading={isLoading}>
      Profile: {user && user.email}
    </PageWrapper>
  )
})

export default Profile
