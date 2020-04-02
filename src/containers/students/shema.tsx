import React from 'react'
import { ICellType } from '../../components/table/types'
import v4 from 'uuid/v4'
import { Button, IconButton, Typography } from '@material-ui/core'
import { MenuBook, Message } from '@material-ui/icons'
import { TFunction } from 'i18next'
import { IStudentType } from '../../modules/students'
import { Avatar } from 'common/avatar'

export const header: (t: TFunction) => ICellType[] = t => [
  {
    id: v4(),
    children: <Typography>№</Typography>
  },
  {
    id: v4(),
    children: null
  },
  {
    id: v4(),
    children: <Typography>{t('fullNameLabel')}</Typography>
  },
  {
    id: v4(),
    children: null
  }
]

export const row: (
  t: TFunction,
  student: IStudentType,
  handleProfileClick: (student: IStudentType) => () => void
) => ICellType[] = (t, student, handleProfileClick) => [
  {
    id: v4(),
    children: student.orderNumber,
    cellProps: {
      style: { width: 60 }
    }
  },
  {
    id: v4(),
    children: (
      <Avatar
        src=""
        firstName={student.firstName}
        lastName={student.lastName}
      />
    ),
    cellProps: {
      style: { width: 100 }
    }
  },
  {
    id: v4(),
    children: (
      <Typography>
        {`${student.lastName} ${student.firstName} ${student.patronymicName}`}
      </Typography>
    )
  },
  {
    id: v4(),
    children: (
      <div>
        <IconButton color="inherit" style={{ marginRight: 10 }}>
          <MenuBook />
        </IconButton>
        <IconButton color="inherit" style={{ marginRight: 10 }}>
          <Message />
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          onClick={handleProfileClick(student)}
        >
          {t('profileLabel')}
        </Button>
      </div>
    ),
    cellProps: {
      align: 'right',
      style: { width: 260 }
    }
  }
]
