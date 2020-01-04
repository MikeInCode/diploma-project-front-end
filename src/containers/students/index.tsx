import React from 'react'
import { PageWrapper } from '../../common/pageWrapper'
import { Table } from '../../components/table'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getStudentsAction } from '../../modules/students'
import { header, row } from './shema'

const mapState = ({ students: { isLoading, students } }: IRootReducer) => ({
  isLoading,
  students
})

const Students = React.memo(() => {
  const { isLoading, students } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getStudentsAction.started())
  }, [dispatch])

  return (
    <PageWrapper isLoading={isLoading}>
      <Table<any>
        headerCells={header}
        rowCells={row}
        data={students}
        colDimensions={[25, 25, 10, 10, 12, 18]}
      />
    </PageWrapper>
  )
})

export default Students
