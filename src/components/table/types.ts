import React from 'react'
import { TableCellProps, TablePaginationProps } from '@material-ui/core'

export interface ITableProps<T> {
  data: T[]
  header: ICellType[]
  row: (rowData: T) => ICellType[]
  paginationProps?: TablePaginationProps
}

export interface ICellType {
  id: string
  children: React.ReactNode
  cellProps?: TableCellProps
}
