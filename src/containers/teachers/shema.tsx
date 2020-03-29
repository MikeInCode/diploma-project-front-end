import React from 'react'
import v4 from 'uuid/v4'
import { Button, IconButton } from '@material-ui/core'
import { Message } from '@material-ui/icons'
import { ICellType } from '../../components/table/types'
import { TFunction } from 'i18next'
import { GetTeachers_teachers } from '../../graphQLTypes'

export const header: (t: TFunction) => ICellType[] = t => [
  {
    id: v4(),
    children: t('fullNameLabel')
  },
  {
    id: v4(),
    children: t('instituteLabel')
  },
  {
    id: v4(),
    children: t('departmentLabel')
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
      children: `${teacher.lastName} ${teacher.firstName} ${teacher.patronymicName}`
    },
    {
      id: v4(),
      children: teacher.institute.name
    },
    {
      id: v4(),
      children: teacher.department.name
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
