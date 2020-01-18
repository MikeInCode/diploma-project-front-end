import React from 'react'
import { PageWrapper } from '../../common/pageWrapper'
import { Table } from '../../components/table'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getStudentsAction } from '../../modules/students'
import { header, row } from './shema'
import { useStudentsStyles } from './styles'

const mapState = ({ students: { isLoading, students } }: IRootReducer) => ({
  isLoading,
  students
})

const Students = React.memo(() => {
  const styles = useStudentsStyles({})

  const { isLoading, students } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getStudentsAction.started())
  }, [dispatch])

  const rowCells = React.useCallback((student: any) => row(student, styles), [
    styles
  ])

  return (
    <PageWrapper isLoading={isLoading}>
      <Table<any>
        headerCells={header}
        rowCells={rowCells}
        data={students}
        colDimensions={[25, 25, 9, 9, 12, 20]}
      />
    </PageWrapper>
  )
})

export default Students
