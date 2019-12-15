import React from 'react'
import ReactSelect from 'react-select'
import { ISelectProps } from './types'
import { selectStyles } from './styles'
import { Option } from './components'
import { Typography } from '../../common/typography'
import { useInputStyles } from '../../common/input/styles'

export const Select = React.memo<ISelectProps>(({ errorMessage, ...rest }) => {
  const styles = useInputStyles({})
  return (
    <div className={styles.wrapper}>
      <ReactSelect
        styles={selectStyles(!!errorMessage)}
        components={{ Option }}
        {...rest}
      />
      {errorMessage && (
        <Typography variant="body2" className={styles.errorMessage}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
