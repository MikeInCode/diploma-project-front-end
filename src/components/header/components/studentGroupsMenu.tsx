import React from 'react'
import { Button, MenuItem, MenuList } from '@material-ui/core'
import { useStudentGroupsMenuStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { IRootReducer } from 'modules/types'
import { getGroupsAction } from 'modules/university'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { HoveredMenu } from 'components/hoveredMenu'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'

const mapState = ({ university: { groups } }: IRootReducer) => ({
  groups
})

export const StudentGroupsMenu = React.memo(() => {
  const { t } = useTranslation()

  const styles = useStudentGroupsMenuStyles()

  const { groups } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getGroupsAction.started())
  })

  const handleItemClick = React.useCallback(
    (groupId: string, handleClose) => () => {
      dispatch(push(ROUTES.STUDENTS_LINK(groupId)))
      handleClose()
    },
    [dispatch]
  )

  return (
    <HoveredMenu anchor={<Button color="inherit">{t('studentsLabel')}</Button>}>
      {handleClose => (
        <MenuList className={styles.menuList}>
          {groups.map(group => (
            <MenuItem
              key={group.id}
              onClick={handleItemClick(group.id, handleClose)}
            >
              {group.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </HoveredMenu>
  )
})
