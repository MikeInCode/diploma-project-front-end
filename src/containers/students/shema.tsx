import React from 'react'
import { ICellType } from '../../components/table/types'
import { Typography } from '../../common/typography'
import v4 from 'uuid/v4'
import { Button } from '../../common/button'
import { IconButton } from '@material-ui/core'
import { MenuBook, Message } from '@material-ui/icons'

export const header: ICellType[] = [
  {
    id: v4(),
    children: <Typography variant="body1">Name</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Specialty</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Course</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Group</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Tags</Typography>
  },
  {
    id: v4(),
    children: <div />
  }
]

export const row: (student: any, styles: any) => ICellType[] = (
  student,
  styles
) => [
  {
    id: v4(),
    children: (
      <Typography variant="body1">{`${student.surname} ${student.name} ${student.fatherName}`}</Typography>
    )
  },
  {
    id: v4(),
    children: <Typography variant="body1">{student.specialty}</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">{student.course}</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">{student.group}</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Chill</Typography>
  },
  {
    id: v4(),
    children: (
      <div>
        <IconButton className={styles.gradebook}>
          <MenuBook />
        </IconButton>
        <IconButton className={styles.message}>
          <Message />
        </IconButton>
        <Button>Profile</Button>
      </div>
    )
  }
]
