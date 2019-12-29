import React from 'react'

export interface ITableProps<T> {
  data: T[]
  header: React.ReactNode
  row: (item: T) => React.ReactNode
}
