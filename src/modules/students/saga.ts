import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ApolloQueryResult } from 'apollo-client'
import { Action } from 'typescript-fsa'
import { StudentsService } from 'api/students'
import {
  getEvaluationsAction,
  getStudentsAction,
  updateEvaluationAction
} from './actions'
import {
  GetEvaluations,
  GetEvaluationsVariables,
  GetStudents,
  GetStudentsVariables,
  UpdateEvaluation,
  UpdateEvaluationVariables
} from 'graphQLTypes'

function* getStudentsSaga(action: Action<GetStudentsVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<GetStudents> = yield call(
      StudentsService.getStudents,
      params
    )
    const result = response.data
    yield put(getStudentsAction.done({ params, result }))
  } catch (error) {
    yield put(getStudentsAction.failed({ params, error }))
  }
}

function* getEvaluationsSaga(action: Action<GetEvaluationsVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<GetEvaluations> = yield call(
      StudentsService.getEvaluations,
      params
    )
    const result = response.data
    yield put(getEvaluationsAction.done({ params, result }))
  } catch (error) {
    yield put(getEvaluationsAction.failed({ params, error }))
  }
}

function* updateEvaluationSaga(action: Action<UpdateEvaluationVariables>) {
  const params = action.payload
  try {
    const response: ApolloQueryResult<UpdateEvaluation> = yield call(
      StudentsService.updateEvaluation,
      params
    )
    const result = response.data
    yield put(updateEvaluationAction.done({ params, result }))
  } catch (error) {
    yield put(updateEvaluationAction.failed({ params, error }))
  }
}

export function* saga() {
  yield all([
    takeLatest(getStudentsAction.started, getStudentsSaga),
    takeLatest(getEvaluationsAction.started, getEvaluationsSaga),
    takeLatest(updateEvaluationAction.started, updateEvaluationSaga)
  ])
}
