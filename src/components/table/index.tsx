import React from 'react'
import { Paper, TableCell, TableRow } from '@material-ui/core'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { useTableStyles } from './styles'
import { ITableProps } from './types'
import { SCROLL_WIDTH } from '../../constants'

export const Table = <T extends {}>({
  headerCells,
  rowCells,
  data,
  colDimensions
}: ITableProps<T>) => {
  const styles = useTableStyles({})

  const [headerHeight, setHeaderHeight] = React.useState(0)

  const setHeight = React.useCallback(
    (node: HTMLDivElement) => setHeaderHeight(node.clientHeight),
    []
  )

  const calcColumnWidth = React.useCallback(
    (autoSizerWidth: number, index: number) =>
      colDimensions ? autoSizerWidth * (colDimensions[index] / 100) : 'auto',
    [colDimensions]
  )

  return (
    <Paper className={styles.paper}>
      <AutoSizer>
        {({ width, height }) => (
          <>
            <TableRow
              ref={setHeight}
              style={{
                width,
                paddingRight: SCROLL_WIDTH
              }}
              className={styles.header}
            >
              {headerCells.map(({ id, children }, index) => (
                <TableCell
                  key={id}
                  style={{
                    width: calcColumnWidth(width, index)
                  }}
                >
                  {children}
                </TableCell>
              ))}
            </TableRow>
            <List
              width={width}
              height={height - headerHeight}
              itemCount={data.length}
              itemSize={68}
              itemData={data}
            >
              {({ index, style, data }) => {
                const item = data[index]
                return (
                  <TableRow style={{ ...style }} className={styles.row}>
                    {rowCells(item).map(({ id, children }, index) => (
                      <TableCell
                        key={id}
                        style={{ width: calcColumnWidth(width, index) }}
                      >
                        {children}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              }}
            </List>
          </>
        )}
      </AutoSizer>
    </Paper>
  )
}
