import React from 'react'
import { IAssessmentDrawerProps } from './types'
import { useAssessmentDrawerStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { DrawerWrapper } from 'common/drawerWrapper'
import { ListItem, ListItemText } from '@material-ui/core'
import MaterialTable from 'material-table'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useMount } from 'react-use'
import { IRootReducer } from 'modules/types'
import { getEvaluationsAction, updateEvaluationAction } from 'modules/students'
import { MARK_DATE_FORMAT } from 'appConstants'
import { markDictionary, subjectTypeDictionary } from 'dictionary'
import { format } from 'date-fns'
import { MarkValueEnum } from 'graphQLTypes'

const mapState = ({
  students: {
    studentEvaluation: { evaluations, isLoading, isUpdating }
  }
}: IRootReducer) => ({
  evaluations,
  isLoading,
  isUpdating
})

export const AssessmentDrawer = React.memo<IAssessmentDrawerProps>(
  ({ student }) => {
    const { t } = useTranslation()

    const styles = useAssessmentDrawerStyles({})

    const { evaluations, isLoading, isUpdating } = useSelector(
      mapState,
      shallowEqual
    )

    const dispatch = useDispatch()

    useMount(() => {
      dispatch(getEvaluationsAction.started({ studentId: student.id }))
    })

    return (
      <DrawerWrapper isLoading={isLoading}>
        <ListItem>
          <MaterialTable
            columns={[
              {
                field: 'scheduledSubject.subject.name',
                title: t('subjectLabel'),
                defaultSort: 'asc'
              },
              {
                field: 'scheduledSubject.subject.type',
                title: t('subjectTypeLabel'),
                sorting: false,
                render: rowData =>
                  t(
                    subjectTypeDictionary[
                      rowData.scheduledSubject.subject.subjectType
                    ]
                  )
              }
            ]}
            data={evaluations}
            title={
              <ListItemText
                className={styles.listItemText}
                secondary={`${t('studentLabel')}:\u00A0`}
                primary={`${student.lastName} ${student.firstName} ${student.patronymicName}`}
              />
            }
            detailPanel={rowData => (
              <MaterialTable
                columns={rowData.marks.map(mark => ({
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
                  rowData.marks.reduce((acc, item) => {
                    acc[item.id] = item.value
                    return acc
                  }, {})
                ]}
                editable={{
                  onRowUpdate: newData =>
                    new Promise(resolve => {
                      dispatch(
                        updateEvaluationAction.started({
                          evaluationId: rowData.id,
                          input: Object.entries<MarkValueEnum>(newData).map(
                            ([id, value]) => ({
                              id,
                              value
                            })
                          )
                        })
                      )
                      resolve()
                    })
                }}
                localization={{
                  header: {
                    actions: ''
                  },
                  body: {
                    editTooltip: '',
                    editRow: {
                      saveTooltip: '',
                      cancelTooltip: ''
                    }
                  }
                }}
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
            )}
            isLoading={isUpdating}
            localization={{
              body: {
                emptyDataSourceMessage: t('emptyTableLabel')
              }
            }}
            options={{
              paging: false,
              draggable: false,
              search: false
            }}
            style={{
              width: '100%'
            }}
          />
        </ListItem>
      </DrawerWrapper>
    )
  }
)
