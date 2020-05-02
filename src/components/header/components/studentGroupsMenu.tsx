import React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { IRootReducer } from 'modules/types'
import { getGroupsAction } from 'modules/university'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'

const mapState = ({ university: { groups } }: IRootReducer) => ({
  groups
})

export const StudentGroupsMenu = React.memo(() => {
  const { t } = useTranslation()

  const { groups } = useSelector(mapState, shallowEqual)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getGroupsAction.started())
  })

  const handleItemClick = React.useCallback(
    (groupId: string) => () => {
      dispatch(push(ROUTES.STUDENTS_LINK(groupId)))
      handleClose()
    },
    [dispatch]
  )

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        {t('studentsLabel')}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {groups.map(group => (
          <MenuItem key={group.id} onClick={handleItemClick(group.id)}>
            {group.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
})
