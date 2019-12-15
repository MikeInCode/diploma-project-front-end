import React from 'react'
import { Typography } from '../typography'
import { useRowStyles } from './styles'

export const Row = React.memo<React.PropsWithChildren<{ label: string }>>(
  ({ label, children }) => {
    const styles = useRowStyles({})
    return (
      <div className={styles.root}>
        <Typography variant="body1">{label}</Typography>
        {children}
      </div>
    )
  }
)
