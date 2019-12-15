import { Styles } from 'react-select'
import { Color } from '../../theme'

export const selectStyles: (error: boolean) => Partial<Styles> = error => ({
  control: (base, state) => ({
    ...base,
    background: error ? Color.Red1 : Color.Grey1,
    borderColor: error ? Color.Red : Color.Grey,
    boxShadow: state.isFocused
      ? `0 0 0 1px ${error ? Color.Red : Color.Grey}`
      : 'none',
    '&:hover': {
      borderColor: error ? Color.Red : Color.Grey
    },
    height: 35,
    minHeight: 35
  }),
  menuList: base => ({
    ...base,
    padding: '8px 0'
  }),
  input: base => ({
    ...base,
    color: Color.Black,
    fontFamily: 'sans'
  }),
  indicatorsContainer: base => ({
    ...base,
    height: '100%'
  }),
  indicatorSeparator: base => ({
    ...base,
    background: Color.Grey
  }),
  dropdownIndicator: base => ({
    ...base,
    color: Color.Grey,
    '&:hover': {
      color: Color.Grey2
    }
  }),
  placeholder: base => ({
    ...base,
    color: Color.Grey
  })
})
