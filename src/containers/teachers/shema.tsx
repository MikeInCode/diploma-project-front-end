import React from 'react'
import { ICellType } from '../../components/table/types'
import { Typography } from '../../common/typography'
import v4 from 'uuid/v4'
import { Button } from '../../common/button'
import { IconButton } from '@material-ui/core'
import { Message } from '@material-ui/icons'
import { IRowType } from './types'

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

export const row: (data: IRowType) => ICellType[] = ({
  teacher,
  styles,
  onClickProfile
}) => [
  {
    id: v4(),
    children: (
      <Typography variant="body1">{`${teacher.lastName} ${teacher.firstName} ${teacher.patronymicName}`}</Typography>
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
        <Button onClick={onClickProfile(teacher)}>Profile</Button>
      </div>
    )
  }
]
