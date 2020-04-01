import React from 'react'
import { PageWrapper } from 'common/pageWrapper'
import { Table } from 'components/table'
import { IRootReducer } from 'modules/types'
import { clearTeachers, getTeachersAction } from 'modules/teachers'
import { openDrawerAction } from 'modules/drawer'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { header, row } from './shema'
import { DrawerEnum } from '../../enums'
import { useTranslation } from 'react-i18next'
import { GetTeachers_teachers } from '../../graphQLTypes'
import { useDebounce, useMount, useUnmount, useUpdateEffect } from 'react-use'
import { Input } from '@material-ui/core'

const mapState = ({ teachers: { isLoaded, teachers } }: IRootReducer) => ({
  isLoaded,
  teachers
})

const Teachers = React.memo(() => {
  const { t } = useTranslation()

  const { isLoaded, teachers } = useSelector(mapState, shallowEqual)

  const [teachersList, setTeachersList] = React.useState<
    GetTeachers_teachers[]
  >([])

  useUpdateEffect(() => {
    setTeachersList(teachers)
  }, [teachers])

  const [searchText, setSearchText] = React.useState('')

  const handleTextChange = React.useCallback(e => {
    setSearchText(e.target.value)
  }, [])

  useDebounce(
    () => {
      if (searchText.length > 2 || searchText.length === 0) {
        setTeachersList(
          teachers.filter(teacher =>
            `${teacher.lastName.toLowerCase()} ${teacher.firstName.toLowerCase()} ${teacher.patronymicName.toLowerCase()}`.includes(
              searchText.toLowerCase()
            )
          )
        )
      }
    },
    800,
    [searchText]
  )

  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getTeachersAction.started())
  })

  useUnmount(() => {
    dispatch(clearTeachers())
  })

  const handleClickProfile = React.useCallback(
    (teacher: GetTeachers_teachers) => () => {
      dispatch(
        openDrawerAction({
          type: DrawerEnum.PROFILE_DRAWER,
          data: { profile: teacher }
        })
      )
    },
    [dispatch]
  )

  const rowCells = React.useCallback(
    (teacher: GetTeachers_teachers) => row(t, teacher, handleClickProfile),
    [handleClickProfile, t]
  )

  return (
    <PageWrapper isLoading={!isLoaded}>
      <Table<GetTeachers_teachers>
        data={teachersList}
        header={header(t)}
        row={rowCells}
        toolbar={
          <Input
            placeholder={t('tableSearchLabel')}
            value={searchText}
            onChange={handleTextChange}
            style={{ width: 300 }}
          />
        }
      />
    </PageWrapper>
  )
})

export default Teachers
