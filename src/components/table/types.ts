import React from 'react'

export interface ITableProps<T> {
  data: T[]
  headerCells: ICellType[]
  rowCells: (item: T) => ICellType[]
  colDimensions?: number[]
}

export interface ICellType {
  id: string
  children: React.ReactNode
}
