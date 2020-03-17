import React from 'react'
import v4 from 'uuid/v4'
import { Button, IconButton } from '@material-ui/core'
import { Message } from '@material-ui/icons'
import { ICellType } from '../../components/table/types'

export const header: ICellType[] = [
  {
    id: v4(),
    children: 'Name'
  },
  {
    id: v4(),
    children: 'Subjects'
  },
  {
    id: v4(),
    children: 'Department'
  },
  {
    id: v4(),
    children: null
  }
]

export const row: (
  teacher: any,
  handleProfileClick: (teacher) => () => void
) => ICellType[] = (teacher, handleProfileClick) => {
  return [
    {
      id: v4(),
      children: `${teacher.lastName} ${teacher.firstName} ${teacher.patronymicName}`
    },
    {
      id: v4(),
      children: teacher.subjects
    },
    {
      id: v4(),
      children: teacher.department
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
            Profile
          </Button>
        </div>
      ),
      cellProps: {
        align: 'right'
      }
    }
  ]
}
