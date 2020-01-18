import React from 'react'
import { ICellType } from '../../components/table/types'
import { Typography } from '../../common/typography'
import v4 from 'uuid/v4'
import { Button } from '../../common/button'
import { IconButton } from '@material-ui/core'
import { Message } from '@material-ui/icons'

export const header: ICellType[] = [
  {
    id: v4(),
    children: <Typography variant="body1">Name</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Subjects</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">Department</Typography>
  },
  {
    id: v4(),
    children: <div />
  }
]

export const row: (teacher: any, styles: any) => ICellType[] = (
  teacher,
  styles
) => [
  {
    id: v4(),
    children: (
      <Typography variant="body1">{`${teacher.surname} ${teacher.name} ${teacher.fatherName}`}</Typography>
    )
  },
  {
    id: v4(),
    children: <Typography variant="body1">{teacher.subjects}</Typography>
  },
  {
    id: v4(),
    children: <Typography variant="body1">{teacher.department}</Typography>
  },
  {
    id: v4(),
    children: (
      <div>
        <IconButton className={styles.message}>
          <Message />
        </IconButton>
        <Button>Profile</Button>
      </div>
    )
  }
]
