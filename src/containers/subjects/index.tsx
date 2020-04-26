import React from 'react'
import { IRootReducer } from 'modules/types'
import { getSubjectsAction } from 'modules/subjects'
import { PageWrapper } from 'common/pageWrapper'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useMount } from 'react-use'
import { MARK_DATE_FORMAT, TABLE_HEIGHT } from 'appConstants'
import MaterialTable from 'material-table'
import { markDictionary, subjectTypeDictionary } from '../../dictionary'
import { getUserInitials } from '../../utils/getUserInitials'
import { format } from 'date-fns'
import { GetSubjects_studentSubjects } from '../../graphQLTypes'

const mapState = ({ subjects: { isLoading, subjects } }: IRootReducer) => ({
  isLoading,
  subjects
})

const Subjects = React.memo(() => {
  const { t } = useTranslation()

  const { isLoading, subjects } = useSelector(mapState, shallowEqual)
  const dispatch = useDispatch()

  useMount(() => {
    dispatch(getSubjectsAction.started())
  })

  return (
    <PageWrapper isLoading={isLoading}>
      <MaterialTable
        columns={[
          {
            field: 'subject.name',
            title: t('subjectLabel'),
            defaultSort: 'asc'
          },
          {
            field: 'subject.subjectType',
            title: t('subjectTypeLabel'),
            sorting: false,
            render: rowData =>
              t(subjectTypeDictionary[rowData.subject.subjectType])
          },
          {
            field: 'teacher.lastName',
            title: t('teachersLabel'),
            render: rowData =>
              `${rowData.teacher.lastName} ${getUserInitials(
                rowData.teacher.firstName,
                rowData.teacher.patronymicName,
                '.'
              )}`
          }
        ]}
        data={subjects}
        detailPanel={[
          ({ evaluation }: GetSubjects_studentSubjects) => ({
            disabled: !evaluation,
            render: rowData => (
              <MaterialTable
                columns={rowData.evaluation.marks.map(mark => ({
                  field: mark.id,
                  title: format(
                    new Date(mark.lesson.startTime),
                    MARK_DATE_FORMAT
                  ),
                  lookup: markDictionary,
                  headerStyle: {
                    textAlign: 'end'
                  },
                  cellStyle: {
                    textAlign: 'end'
                  }
                }))}
                data={[
                  rowData.evaluation.marks.reduce((acc, item) => {
                    acc[item.id] = item.value
                    return acc
                  }, {})
                ]}
                options={{
                  paging: false,
                  draggable: false,
                  toolbar: false,
                  sorting: false
                }}
                style={{
                  boxShadow: 'none'
                }}
              />
            )
          })
        ]}
        options={{
          paging: false,
          draggable: false,
          showTitle: false,
          actionsColumnIndex: -1,
          searchFieldAlignment: 'left',
          maxBodyHeight: TABLE_HEIGHT
        }}
        localization={{
          header: {
            actions: ''
          },
          body: {
            emptyDataSourceMessage: t('emptyTableLabel')
          },
          toolbar: {
            searchTooltip: '',
            searchPlaceholder: t('tableSearchLabel')
          }
        }}
      />
    </PageWrapper>
  )
})

export default Subjects
