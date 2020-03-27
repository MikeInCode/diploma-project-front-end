import { IUniversityState } from './types'

export const initialState: IUniversityState = {
  isAcademicUnitsLoading: false,
  academicUnits: {
    institutes: [],
    departments: [],
    specialities: [],
    groups: []
  }
}
