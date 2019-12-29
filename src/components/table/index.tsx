import React from 'react'
import { Paper } from '@material-ui/core'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { useTableStyles } from './styles'
import { ITableProps } from './types'
import { SCROLL_WIDTH } from '../../constants'

export const Table = <T extends {}>({ header, row, data }: ITableProps<T>) => {
  const styles = useTableStyles({})

  const [headerHeight, setHeaderHeight] = React.useState(0)

  const setHeight = React.useCallback(
    (node: HTMLDivElement) => setHeaderHeight(node.clientHeight),
    []
  )

  return (
    <Paper className={styles.paper}>
      <AutoSizer>
        {({ width, height }) => (
          <>
            <div
              ref={setHeight}
              style={{
                width,
                paddingRight: SCROLL_WIDTH
              }}
              className={styles.header}
            >
              {header}
            </div>
            <List
              width={width}
              height={height - headerHeight}
              itemCount={data.length}
              itemSize={50}
              itemData={data}
            >
              {({ index, style, data }) => {
                const item = data[index]
                return (
                  <div style={{ ...style }} className={styles.row}>
                    {row(item)}
                  </div>
                )
              }}
            </List>
          </>
        )}
      </AutoSizer>
    </Paper>
  )
}
