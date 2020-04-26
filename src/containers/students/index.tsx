import React from 'react'
import { IRootReducer } from 'modules/types'
import { getStudentsAction } from 'modules/students'
import { openDrawerAction } from 'modules/drawer'
import { PageWrapper } from 'common/pageWrapper'
import { Avatar } from 'common/avatar'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DrawerEnum } from 'enums'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { Box, ListItemText } from '@material-ui/core'
import { useStudentsStyles } from './styles'
import { TABLE_HEIGHT } from 'appConstants'
import MaterialTable from 'material-table'
import { courseDictionary } from 'dictionary'

const mapState = ({
  students: { isLoading, students },
  university: { groups, isGroupsLoading }
}: IRootReducer) => ({
  isLoading,
  isGroupsLoading,
  students,
  groups
})

const Students = React.memo(() => {
  const { t } = useTranslation()

  const styles = useStudentsStyles({})

  const { isLoading, isGroupsLoading, students, groups } = useSelector(
    mapState,
    shallowEqual
  )

  const { groupId } = useParams<{ groupId: string }>()

  const group = React.useMemo(
    () => groups.find(group => group.id === groupId),
    [groupId, groups]
  )

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getStudentsAction.started({ groupId }))
  })

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

  const handleClickAssessment = React.useCallback(
    (event, student) => {
      dispatch(
        openDrawerAction({
          type: DrawerEnum.ASSESSMENT,
          data: { student }
        })
      )
    },
    [dispatch]
  )

  const title = React.useMemo(
    () => (
      <div className={styles.title}>
        <ListItemText
          className={styles.listItemText}
          primary={group?.speciality?.name}
          secondary={`${t('specialityLabel')}:\u00A0`}
        />
        <ListItemText
          className={styles.listItemText}
          primary={group?.name}
          secondary={`${t('groupLabel')}:\u00A0`}
        />
        <ListItemText
          className={styles.listItemText}
          primary={courseDictionary[group?.course]}
          secondary={`${t('courseLabel')}:\u00A0`}
        />
      </div>
    ),
    [group, styles.listItemText, styles.title, t]
  )

  return (
    <PageWrapper isLoading={isLoading || isGroupsLoading}>
      <MaterialTable
        columns={[
          {
            field: 'orderNumber',
            title: '№',
            render: data => (
              <div className={styles.orderCell}>
                {data.orderNumber}
                <Box width={50} />
                <Avatar
                  src=""
                  firstName={data.firstName}
                  lastName={data.lastName}
                />
              </div>
            )
          },
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
          }
        ]}
        actions={[
          {
            icon: 'menu_book',
            onClick: handleClickAssessment
          },
          {
            icon: 'message',
            onClick: console.log
          },
          {
            icon: 'account_circle',
            onClick: handleClickProfile
          }
        ]}
        data={students}
        title={title}
        options={{
          paging: false,
          draggable: false,
          actionsColumnIndex: -1,
          searchFieldAlignment: 'left',
          maxBodyHeight: TABLE_HEIGHT
        }}
        localization={{
          header: {
            actions: ''
          },
          body: {
            emptyDataSourceMessage: t('emptyTableLabel')
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

export default Students
