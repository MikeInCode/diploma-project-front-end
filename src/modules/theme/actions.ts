import actionCreatorFactory from 'typescript-fsa'
import { PaletteType } from '@material-ui/core'

const actionCreator = actionCreatorFactory('theme')

export const onChangeThemeAction = actionCreator<PaletteType>('ON_CHANGE_THEME')
