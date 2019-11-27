import { FormikProps } from 'formik'

export const getErrorMessage = <T>(name: keyof T, form: FormikProps<T>) => {
  const error = form.errors[name]
  const touched = form.touched[name]
  return error && touched ? error : null
}
