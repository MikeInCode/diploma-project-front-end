import React from 'react'
import { Drawer } from '@material-ui/core'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { closeDrawerAction } from '../../modules/drawer'
import { useDrawerStyles } from './styles'
import { DrawerEnum } from '../../enums'
import { ProfileDrawer } from './components'

const mapState = ({ drawer: { opened } }: IRootReducer) => opened

export const DrawerSwitcher = React.memo(() => {
  const styles = useDrawerStyles({})

  const opened = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  const handleClose = React.useCallback(() => dispatch(closeDrawerAction()), [
    dispatch
  ])

  const renderDrawerContent = React.useCallback(() => {
    const { type, data } = opened
    switch (type) {
      case DrawerEnum.PROFILE_DRAWER:
        return <ProfileDrawer onClose={handleClose} {...data} />
      default:
        return null
    }
  }, [handleClose, opened])

  return (
    <Drawer anchor="right" open={!!opened} onClose={handleClose}>
      <div className={styles.root}>{!!opened && renderDrawerContent()}</div>
    </Drawer>
  )
})
