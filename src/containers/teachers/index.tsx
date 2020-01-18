import React from 'react'
import { PageWrapper } from '../../common/pageWrapper'
import { Table } from '../../components/table'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { header, row } from './shema'
import { useTeachersStyles } from './styles'
import { getTeachersAction } from '../../modules/teachers'
import { openDrawerAction } from '../../modules/drawer'
import { DrawerEnum } from '../../enums'

const mapState = ({ teachers: { isLoading, teachers } }: IRootReducer) => ({
  isLoading,
  teachers
})

const Teachers = React.memo(() => {
  const styles = useTeachersStyles({})

  const { isLoading, teachers } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getTeachersAction.started())
  }, [dispatch])

  const handleClickProfile = React.useCallback(
    (teacher: any) => () =>
      dispatch(
        openDrawerAction({ type: DrawerEnum.PROFILE_DRAWER, data: teacher })
      ),
    [dispatch]
  )

  const rowCells = React.useCallback(
    (teacher: any) =>
      row({ teacher, styles, onClickProfile: handleClickProfile }),
    [handleClickProfile, styles]
  )

  return (
    <PageWrapper isLoading={isLoading}>
      <Table<any>
        headerCells={header}
        rowCells={rowCells}
        data={teachers}
        colDimensions={[25, 40, 15, 20]}
      />
    </PageWrapper>
  )
})

export default Teachers