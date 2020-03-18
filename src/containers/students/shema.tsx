import React from 'react'
import { ICellType } from '../../components/table/types'
import v4 from 'uuid/v4'
import { Button, IconButton } from '@material-ui/core'
import { MenuBook, Message } from '@material-ui/icons'
import { TFunction } from 'i18next'

export const header: (t: TFunction) => ICellType[] = t => [
  {
    id: v4(),
    children: t('fullNameLabel')
  },
  {
    id: v4(),
    children: t('specialityLabel')
  },
  {
    id: v4(),
    children: t('courseLabel')
  },
  {
    id: v4(),
    children: t('groupLabel')
  },
  {
    id: v4(),
    children: 'Tags'
  },
  {
    id: v4(),
    children: null
  }
]

export const row: (
  t: TFunction,
  student: any,
  handleProfileClick: (student) => () => void
) => ICellType[] = (t, student, handleProfileClick) => [
  {
    id: v4(),
    children: `${student.lastName} ${student.firstName} ${student.patronymicName}`
  },
  {
    id: v4(),
    children: student.specialty
  },
  {
    id: v4(),
    children: student.course
  },
  {
    id: v4(),
    children: student.group
  },
  {
    id: v4(),
    children: 'Chill'
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
      align: 'right'
    }
  }
]
