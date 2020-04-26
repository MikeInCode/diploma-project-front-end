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
import emptyState from 'assets/empty-state.png'
import clsx from 'clsx'

const TableComponent = <T extends any>({
  header,
  row,
  data,
  paginationProps,
  toolbar,
  paperClassName
}: ITableProps<T>) => {
  const styles = useTableStyles({})

  return (
    <Paper className={clsx(paperClassName, styles.paper)}>
      {toolbar && (
        <TableRow component="div">
          <TableCell component="div" className={styles.toolbar}>
            {toolbar}
          </TableCell>
        </TableRow>
      )}
      <TableContainer className={styles.tableContainer}>
        {data.length === 0 && (
          <div className={styles.overlay}>
            <img src={emptyState} alt="Users not found" />
          </div>
        )}
        <MuiTable stickyHeader={true}>
          <TableHead>
            <TableRow>
              {header.map(({ id, children, cellProps }) => (
                <TableCell
                  key={id}
                  className={styles.headerCell}
                  {...cellProps}
                >
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
