import React from 'react'
import { IRootReducer } from 'modules/types'
import { clearStudents, getStudentsAction } from 'modules/students'
import { openDrawerAction } from 'modules/drawer'
import { PageWrapper } from 'common/pageWrapper'
import { Table } from 'components/table'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { header, row } from './shema'
import { DrawerEnum } from '../../enums'
import { useTranslation } from 'react-i18next'
import { GetStudents_students } from '../../graphQLTypes'
import { useParams } from 'react-router-dom'
import { useDebounce, useUnmount } from 'react-use'
import { Input } from '@material-ui/core'

const mapState = ({
  students: { isLoading, isLoaded, students }
}: IRootReducer) => ({
  isLoading,
  isLoaded,
  students
})

const Students = React.memo(() => {
  const { t } = useTranslation()

  const { isLoading, isLoaded, students } = useSelector(mapState, shallowEqual)

  const [searchText, setSearchText] = React.useState('')

  const handleTextChange = React.useCallback(e => {
    setSearchText(e.target.value)
  }, [])

  const { groupId } = useParams<{ groupId: string }>()

  const dispatch = useDispatch()

  useDebounce(
    () => {
      if (searchText.length > 2 || searchText.length === 0) {
        dispatch(getStudentsAction.started({ groupId, searchText }))
      }
    },
    800,
    [searchText]
  )

  useUnmount(() => {
    dispatch(clearStudents())
  })

  const handleClickProfile = React.useCallback(
    (student: GetStudents_students) => () => {
      dispatch(
        openDrawerAction({
          type: DrawerEnum.PROFILE_DRAWER,
          data: { profile: student }
        })
      )
    },
    [dispatch]
  )

  const rowCells = React.useCallback(
    (student: GetStudents_students) => row(t, student, handleClickProfile),
    [handleClickProfile, t]
  )

  return (
    <PageWrapper isLoading={!isLoaded}>
      <Table<GetStudents_students>
        isLoading={isLoading}
        data={students}
        header={header(t)}
        row={rowCells}
        toolbar={
          <Input
            placeholder={t('tableSearchLabel')}
            value={searchText}
            onChange={handleTextChange}
          />
        }
      />
    </PageWrapper>
  )
})

export default Students
