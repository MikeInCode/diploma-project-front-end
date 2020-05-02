import React from 'react'
import { PageWrapper } from 'common/pageWrapper'
import { IRootReducer } from 'modules/types'
import { getTeachersAction } from 'modules/teachers'
import { openDrawerAction } from 'modules/drawer'
import { onStartChatAction } from 'modules/chat'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DrawerEnum } from 'enums'
import { useTranslation } from 'react-i18next'
import { useMount } from 'react-use'
import MaterialTable from 'material-table'
import { TABLE_HEIGHT } from 'appConstants'

const mapState = ({ teachers: { isLoading, teachers } }: IRootReducer) => ({
  isLoading,
  teachers
})

const Teachers = React.memo(() => {
  const { t } = useTranslation()

  const { isLoading, teachers } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getTeachersAction.started())
  })

  const handleClickChat = React.useCallback(
    (event, profile) => {
      dispatch(onStartChatAction.started({ interlocutorId: profile.id }))
    },
    [dispatch]
  )

  const handleClickProfile = React.useCallback(
    (event, profile) => {
      dispatch(
        openDrawerAction({
          type: DrawerEnum.PROFILE,
          data: { profile }
        })
      )
    },
    [dispatch]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <MaterialTable
        columns={[
          {
            field: 'lastName',
            title: t('lastNameLabel'),
            defaultSort: 'asc'
          },
          {
            field: 'firstName',
            title: t('firstNameLabel')
          },
          {
            field: 'patronymicName',
            title: t('patronymicNameLabel')
          },
          {
            field: 'department.institute.name',
            title: t('instituteLabel')
          },
          {
            field: 'department.name',
            title: t('departmentLabel')
          }
        ]}
        actions={[
          {
            icon: 'message',
            onClick: handleClickChat
          },
          {
            icon: 'account_circle',
            onClick: handleClickProfile
          }
        ]}
        data={teachers}
        options={{
          paging: false,
          draggable: false,
          showTitle: false,
          searchFieldAlignment: 'left',
          actionsColumnIndex: -1,
          maxBodyHeight: TABLE_HEIGHT
        }}
        localization={{
          header: {
            actions: ''
          },
          toolbar: {
            searchTooltip: '',
            searchPlaceholder: t('tableSearchLabel')
          }
        }}
      />
    </PageWrapper>
  )
})

export default Teachers
