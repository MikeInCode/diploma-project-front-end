import React from 'react'
import {
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

export const Table = <T extends { id: string }>({
  header,
  row,
  data,
  paginationProps
}: ITableProps<T>) => {
  const styles = useTableStyles({})
  return (
    <Paper className={styles.paper}>
      <TableContainer className={styles.tableContainer}>
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
      {!!paginationProps && (
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
