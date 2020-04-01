import React from 'react'
import { IRootReducer } from 'modules/types'
import {
  clearStudents,
  getStudentsAction,
  IStudentType
} from 'modules/students'
import { openDrawerAction } from 'modules/drawer'
import { PageWrapper } from 'common/pageWrapper'
import { Table } from 'components/table'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { header, row } from './shema'
import { DrawerEnum } from '../../enums'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { useDebounce, useMount, useUnmount, useUpdateEffect } from 'react-use'
import { Input, Typography } from '@material-ui/core'
import { useStudentsStyles } from './styles'
import { courseDictionary } from '../../dictionary'

const mapState = ({
  students: { isLoaded, students },
  university: { groups }
}: IRootReducer) => ({
  isLoaded,
  students,
  groups
})

const Students = React.memo(() => {
  const { t } = useTranslation()

  const styles = useStudentsStyles({})

  const { isLoaded, students, groups } = useSelector(mapState, shallowEqual)

  const [studentsList, setStudentsList] = React.useState<IStudentType[]>([])

  useUpdateEffect(() => {
    setStudentsList(students)
  }, [students])

  const [searchText, setSearchText] = React.useState('')

  const handleTextChange = React.useCallback(e => {
    setSearchText(e.target.value)
  }, [])

  const { groupId } = useParams<{ groupId: string }>()

  const group = React.useMemo(
    () => groups.find(group => group.id === groupId) || null,
    [groupId, groups]
  )

  const dispatch = useDispatch()

  useDebounce(
    () => {
      if (searchText.length > 2 || searchText.length === 0) {
        setStudentsList(
          students.filter(student =>
            `${student.lastName.toLowerCase()} ${student.firstName.toLowerCase()} ${student.patronymicName.toLowerCase()}`.includes(
              searchText.toLowerCase()
            )
          )
        )
      }
    },
    800,
    [searchText]
  )

  useMount(() => {
    dispatch(getStudentsAction.started({ groupId }))
  })

  useUnmount(() => {
    dispatch(clearStudents())
  })

  const handleClickProfile = React.useCallback(
    (student: IStudentType) => () => {
      dispatch(
        openDrawerAction({
          type: DrawerEnum.PROFILE_DRAWER,
          data: { profile: student }
        })
      )
    },
    [dispatch]
  )

  const rowCells = React.useCallback(
    (student: IStudentType) => row(t, student, handleClickProfile),
    [handleClickProfile, t]
  )

  const toolbar = React.useMemo(
    () => (
      <div className={styles.toolbar}>
        <Input
          className={styles.input}
          placeholder={t('tableSearchLabel')}
          value={searchText}
          onChange={handleTextChange}
        />
        {group && (
          <div className={styles.groupDetailsContainer}>
            <Typography>
              <span>{`${t('specialityLabel')}: `}</span>
              {`${group.speciality.name}`}
            </Typography>
            <Typography>
              <span>{`${t('courseLabel')}: `}</span>
              {`${courseDictionary[group.course]}`}
            </Typography>
            <Typography>
              <span>{`${t('groupLabel')}: `}</span>
              {`${group.name}`}
            </Typography>
          </div>
        )}
      </div>
    ),
    [
      group,
      handleTextChange,
      searchText,
      styles.groupDetailsContainer,
      styles.input,
      styles.toolbar,
      t
    ]
  )

  return (
    <PageWrapper isLoading={!isLoaded}>
      <Table<IStudentType>
        data={studentsList}
        header={header(t)}
        row={rowCells}
        toolbar={toolbar}
      />
    </PageWrapper>
  )
})

export default Students
