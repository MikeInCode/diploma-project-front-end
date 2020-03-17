import React from 'react'
import { PageWrapper } from '../../common/pageWrapper'
import { Table } from '../../components/table'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { header, row } from './shema'
import { getTeachersAction } from '../../modules/teachers'
import { openDrawerAction } from '../../modules/drawer'
import { DrawerEnum } from '../../enums'

const mapState = ({ teachers: { isLoading, teachers } }: IRootReducer) => ({
  isLoading,
  teachers
})

const Teachers = React.memo(() => {
  const { isLoading, teachers } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTeachersAction.started())
  }, [dispatch])

  const handleClickProfile = React.useCallback(
    (teacher: any) => () => {
      dispatch(
        openDrawerAction({ type: DrawerEnum.PROFILE_DRAWER, data: teacher })
      )
    },
    [dispatch]
  )

  const rowCells = React.useCallback(
    teacher => row(teacher, handleClickProfile),
    [handleClickProfile]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <Table<any> header={header} row={rowCells} data={teachers} />
    </PageWrapper>
  )
})

export default Teachers
