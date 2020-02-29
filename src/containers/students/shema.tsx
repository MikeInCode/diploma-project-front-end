import React from 'react'
import { ICellType } from '../../components/table/types'
import v4 from 'uuid/v4'
import { Button, IconButton } from '@material-ui/core'
import { MenuBook, Message } from '@material-ui/icons'

export const header: ICellType[] = [
  {
    id: v4(),
    children: 'Name'
  },
  {
    id: v4(),
    children: 'Specialty'
  },
  {
    id: v4(),
    children: 'Course'
  },
  {
    id: v4(),
    children: 'Group'
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
  student: any,
  handleProfileClick: (student) => () => void
) => ICellType[] = (student, handleProfileClick) => [
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
          Profile
        </Button>
      </div>
    ),
    cellProps: {
      align: 'right'
    }
  }
]
