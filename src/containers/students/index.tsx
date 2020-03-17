import React from 'react'
import { IRootReducer } from '../../modules/types'
import { PageWrapper } from '../../common/pageWrapper'
import { Table } from '../../components/table'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getStudentsAction } from '../../modules/students'
import { header, row } from './shema'
import { openDrawerAction } from '../../modules/drawer'
import { DrawerEnum } from '../../enums'
import { useTranslation } from 'react-i18next'

const mapState = ({ students: { isLoading, students } }: IRootReducer) => ({
  isLoading,
  students
})

const Students = React.memo(() => {
  const { t } = useTranslation()

  const { isLoading, students } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getStudentsAction.started())
  }, [dispatch])

  const handleClickProfile = React.useCallback(
    (student: any) => () => {
      dispatch(
        openDrawerAction({ type: DrawerEnum.PROFILE_DRAWER, data: student })
      )
    },
    [dispatch]
  )

  const rowCells = React.useCallback(
    student => row(t, student, handleClickProfile),
    [handleClickProfile, t]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <Table<any> header={header(t)} row={rowCells} data={students} />
    </PageWrapper>
  )
})

export default Students
