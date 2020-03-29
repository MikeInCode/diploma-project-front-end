import React from 'react'
import {
  CircularProgress,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core'
import { ITableProps } from './types'
import { useTableStyles } from './styles'
import emptyState from 'assets/empty-state.png'

const TableComponent = <T extends any>({
  header,
  row,
  data,
  paginationProps,
  toolbar,
  isLoading
}: ITableProps<T>) => {
  const showOverlay = React.useMemo(() => isLoading || data.length === 0, [
    data.length,
    isLoading
  ])

  const styles = useTableStyles({
    showOverlay
  })

  const overlay = React.useMemo(
    () => (
      <div className={styles.overlay}>
        {isLoading ? (
          <CircularProgress />
        ) : data.length === 0 ? (
          <img src={emptyState} alt="Users not found" />
        ) : null}
      </div>
    ),
    [data.length, isLoading, styles.overlay]
  )

  return (
    <Paper className={styles.paper}>
      {toolbar && (
        <TableRow component="div">
          <TableCell component="div" className={styles.toolbar}>
            {toolbar}
          </TableCell>
        </TableRow>
      )}
      <TableContainer className={styles.tableContainer}>
        {showOverlay && overlay}
        <MuiTable stickyHeader={true}>
          <TableHead>
            <TableRow>
              {header.map(({ id, children, cellProps }) => (
                <TableCell key={id} {...cellProps}>
                  {children}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(rowData => (
              <TableRow key={rowData.id}>
                {row(rowData).map(({ id, children, cellProps }) => (
                  <TableCell key={id} {...cellProps}>
                    {children}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {paginationProps && (
        <TablePagination
          component="div"
          rowsPerPageOptions={[10]}
          rowsPerPage={10}
          {...(paginationProps as any)}
        />
      )}
    </Paper>
  )
}

export const Table = React.memo(TableComponent) as typeof TableComponent
