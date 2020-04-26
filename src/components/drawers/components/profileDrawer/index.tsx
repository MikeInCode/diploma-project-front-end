import React from 'react'
import { IProfileDrawerProps } from './types'
import { useProfileDrawerStyles } from './styles'
import { DrawerWrapper } from 'common/drawerWrapper'
import {
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Avatar } from 'common/avatar'
import { courseDictionary } from 'dictionary'
import { AccessControl } from 'components/accessControl'
import { RolesEnum } from 'graphQLTypes'
import { batch, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { ROUTES } from 'router/constants'

export const ProfileDrawer = React.memo<IProfileDrawerProps>(
  ({ onClose, profile }) => {
    const { t } = useTranslation()

    const styles = useProfileDrawerStyles({})

    const dispatch = useDispatch()

    const handleEditClick = React.useCallback(() => {
      batch(() => {
        dispatch(push(ROUTES.PROFILE_EDIT_LINK(profile.id)))
        onClose()
      })
    }, [dispatch, onClose, profile.id])

    return (
      <DrawerWrapper>
        <ListItem>
          <ListItemAvatar>
            <Avatar
              src=""
              firstName={profile.firstName}
              lastName={profile.lastName}
              variant="square"
              className={styles.avatar}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.listItemText}
            primary={profile.lastName}
            secondary={t('lastNameLabel')}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.listItemText}
            primary={profile.firstName}
            secondary={t('firstNameLabel')}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.listItemText}
            primary={profile.patronymicName}
            secondary={t('patronymicNameLabel')}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            className={styles.listItemText}
            primary={
              'department' in profile
                ? profile.department.institute.name
                : profile.group.speciality.department.institute.name
            }
            secondary={t('instituteLabel')}
          />
        </ListItem>
        {'department' in profile && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={profile.department.name}
              secondary={t('departmentLabel')}
            />
          </ListItem>
        )}
        {'group' in profile && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={profile.group.speciality.name}
              secondary={t('specialityLabel')}
            />
          </ListItem>
        )}
        {'group' in profile && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={profile.group.name}
              secondary={t('groupLabel')}
            />
          </ListItem>
        )}
        {'group' in profile && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={courseDictionary[profile.group.course]}
              secondary={t('courseLabel')}
            />
          </ListItem>
        )}
        <Divider variant="middle" />
        {profile.phone && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={profile.phone}
              secondary={t('phoneLabel')}
            />
          </ListItem>
        )}
        {profile.email && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={profile.email}
              secondary={t('emailLabel')}
            />
          </ListItem>
        )}
        {true && (
          <ListItem>
            <ListItemText
              className={styles.listItemText}
              primary={'TODO'}
              secondary={t('telegramLabel')}
            />
          </ListItem>
        )}
        <AccessControl permissions={[RolesEnum.ADMIN]}>
          <ListItem>
            <Button
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={handleEditClick}
            >
              {t('editProfileLabel')}
            </Button>
          </ListItem>
        </AccessControl>
      </DrawerWrapper>
    )
  }
)
