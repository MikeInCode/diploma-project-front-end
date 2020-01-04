import React from 'react'
import { ICellType } from '../../components/table/types'
import { Typography } from '../../common/typography'
import v4 from 'uuid/v4'
import { Button } from '../../common/button'

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

export const row: (student: any) => ICellType[] = student => [
  {
    id: v4(),
    children: (
      <Typography
        variant="body1"
        noWrap={true}
      >{`${student.surname} ${student.name} ${student.fatherName}`}</Typography>
    )
  },
  {
    id: v4(),
    children: (
      <Typography variant="body1" noWrap={true}>
        {student.specialty}
      </Typography>
    )
  },
  {
    id: v4(),
    children: (
      <Typography variant="body1" noWrap={true}>
        {student.course}
      </Typography>
    )
  },
  {
    id: v4(),
    children: (
      <Typography variant="body1" noWrap={true}>
        {student.group}
      </Typography>
    )
  },
  {
    id: v4(),
    children: (
      <Typography variant="body1" noWrap={true}>
        Chill
      </Typography>
    )
  },
  {
    id: v4(),
    children: <Button>Profile</Button>
  }
]
