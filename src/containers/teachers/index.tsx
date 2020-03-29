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
import { useDebounce, useUnmount } from 'react-use'
import { Input } from '@material-ui/core'

const mapState = ({
  teachers: { isLoading, isLoaded, teachers }
}: IRootReducer) => ({
  isLoading,
  isLoaded,
  teachers
})

const Teachers = React.memo(() => {
  const { t } = useTranslation()

  const { isLoading, isLoaded, teachers } = useSelector(mapState, shallowEqual)

  const [searchText, setSearchText] = React.useState('')

  const handleTextChange = React.useCallback(e => {
    setSearchText(e.target.value)
  }, [])

  const dispatch = useDispatch()

  useDebounce(
    () => {
      if (searchText.length > 2 || searchText.length === 0) {
        dispatch(getTeachersAction.started({ searchText }))
      }
    },
    800,
    [searchText]
  )

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
        isLoading={isLoading}
        data={teachers}
        header={header(t)}
        row={rowCells}
        toolbar={
          <Input
            placeholder={t('tableSearchLabel')}
            value={searchText}
            onChange={handleTextChange}
          />
        }
      />
    </PageWrapper>
  )
})

export default Teachers
