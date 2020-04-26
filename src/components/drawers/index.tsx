import React from 'react'
import { Drawer } from '@material-ui/core'
import { IRootReducer } from '../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { closeDrawerAction } from '../../modules/drawer'
import { useDrawerStyles } from './styles'
import { DrawerEnum } from '../../enums'
import { AssessmentDrawer, ProfileDrawer } from './components'
import clsx from 'clsx'

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
      case DrawerEnum.PROFILE:
        return <ProfileDrawer onClose={handleClose} {...data} />
      case DrawerEnum.ASSESSMENT:
        return <AssessmentDrawer onClose={handleClose} {...data} />
      default:
        return null
    }
  }, [handleClose, opened])

  return (
    <Drawer anchor="right" open={!!opened} onClose={handleClose}>
      <div className={clsx(styles.root, opened?.type)}>
        {!!opened && renderDrawerContent()}
      </div>
    </Drawer>
  )
})
