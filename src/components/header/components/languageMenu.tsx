import React from 'react'
import { Box, Button, Menu, MenuItem } from '@material-ui/core'
import { ExpandMore, Translate } from '@material-ui/icons'
import { useTranslation } from 'react-i18next'
import { languageDictionary } from 'dictionary'
import { LANGUAGES } from 'appConstants'

export const LanguageMenu = React.memo(() => {
  const { i18n } = useTranslation()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (language: string) => () => {
    i18n.changeLanguage(language)
    handleClose()
  }

  return (
    <>
      <Button color="inherit" onClick={handleOpen}>
        <Translate />
        <Box component="span" margin="0 4px 0 8px">
          {languageDictionary[i18n.language]}
        </Box>
        <ExpandMore fontSize="small" />
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
        {Object.values(LANGUAGES).map(language => (
          <MenuItem key={language} onClick={handleChange(language)}>
            {languageDictionary[language]}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
})
