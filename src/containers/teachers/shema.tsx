import React from 'react'
import v4 from 'uuid/v4'
import { Button, IconButton, Typography } from '@material-ui/core'
import { Message } from '@material-ui/icons'
import { ICellType } from '../../components/table/types'
import { TFunction } from 'i18next'
import { GetTeachers_teachers } from '../../graphQLTypes'

export const header: (t: TFunction) => ICellType[] = t => [
  {
    id: v4(),
    children: <Typography>{t('fullNameLabel')}</Typography>
  },
  {
    id: v4(),
    children: <Typography>{t('instituteLabel')}</Typography>
  },
  {
    id: v4(),
    children: <Typography>{t('departmentLabel')}</Typography>
  },
  {
    id: v4(),
    children: null
  }
]

export const row: (
  t: TFunction,
  teacher: GetTeachers_teachers,
  handleProfileClick: (teacher: GetTeachers_teachers) => () => void
) => ICellType[] = (t, teacher, handleProfileClick) => {
  return [
    {
      id: v4(),
      children: (
        <Typography>{`${teacher.lastName} ${teacher.firstName} ${teacher.patronymicName}`}</Typography>
      )
    },
    {
      id: v4(),
      children: <Typography>{teacher.department.institute.name}</Typography>
    },
    {
      id: v4(),
      children: <Typography>{teacher.department.name}</Typography>
    },
    {
      id: v4(),
      children: (
        <div>
          <IconButton color="inherit" style={{ marginRight: 10 }}>
            <Message />
          </IconButton>
          <Button
            variant="contained"
            color="primary"
            onClick={handleProfileClick(teacher)}
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
}
