import React from 'react'
import { Button, MenuItem, Paper, Popper, Typography } from '@material-ui/core'
import { useCascadingMenuStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from '@material-ui/icons'
import { IRootReducer } from '../../../modules/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { getUniversityAction } from '../../../modules/university'
import { push } from 'connected-react-router'
import { ROUTES } from '../../../router/constants'

const mapState = ({ university: { university } }: IRootReducer) => ({
  university
})

export const CascadingMenu = React.memo(() => {
  const { t } = useTranslation()

  const styles = useCascadingMenuStyles()

  const { university } = useSelector(mapState, shallowEqual)

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getUniversityAction.started())
  })

  const [menuAnchor, setMenuAnchor] = React.useState(null)
  const [expandedNodes, setExpandedNodes] = React.useState([])

  const handleMenuOpen = React.useCallback(e => {
    setMenuAnchor(e.currentTarget)
  }, [])

  const handleMenuClose = React.useCallback(() => {
    setMenuAnchor(null)
    setExpandedNodes([])
  }, [])

  const handleSubMenuOpen = React.useCallback(
    node => e => {
      const { id } = node
      const { currentTarget: anchor } = e
      setExpandedNodes(prevState => [...prevState, { id, anchor }])
    },
    []
  )

  const handleSubMenuClose = React.useCallback(
    node => () => {
      setExpandedNodes(prevState =>
        prevState.filter(item => item.id !== node.id)
      )
    },
    []
  )

  const handleItemClick = React.useCallback(
    (index: number) => () => {
      if (index === 3) {
        handleMenuClose()
        dispatch(push(ROUTES.STUDENTS))
      }
    },
    [dispatch, handleMenuClose]
  )

  const renderMenuItem = React.useCallback(
    (node: any, index: number) => {
      if (node.children.length > 0) {
        const anchorEl = expandedNodes.find(item => item.id === node.id)?.anchor
        return (
          <div
            onMouseEnter={handleSubMenuOpen(node)}
            onMouseLeave={handleSubMenuClose(node)}
          >
            <MenuItem className={styles.menuItem}>
              <Typography>{node.name}</Typography>
              <ArrowRight />
            </MenuItem>
            <Popper
              anchorEl={anchorEl}
              open={!!anchorEl}
              placement="right-start"
              disablePortal={true}
            >
              <Paper>
                {node.children.map(item => renderMenuItem(item, index + 1))}
              </Paper>
            </Popper>
          </div>
        )
      }

      return (
        <MenuItem className={styles.menuItem} onClick={handleItemClick(index)}>
          <Typography>{node.name}</Typography>
        </MenuItem>
      )
    },
    [
      expandedNodes,
      handleItemClick,
      handleSubMenuClose,
      handleSubMenuOpen,
      styles.menuItem
    ]
  )

  return (
    <div onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
      <Button color="inherit">{t('studentsLabel')}</Button>
      <Popper
        anchorEl={menuAnchor}
        open={!!menuAnchor}
        placement="bottom-start"
        disablePortal={true}
      >
        <Paper>{university.map(node => renderMenuItem(node, 0))}</Paper>
      </Popper>
    </div>
  )
})
