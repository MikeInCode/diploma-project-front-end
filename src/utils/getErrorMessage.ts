export const getErrorMessage = (name, form): string => {
  const error = form.errors[name]
  const touched = form.touched[name]
  return error && touched ? error : null
}
