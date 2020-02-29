export const useFormFieldErrors = (name: string, errors: any) => {
  const error = !!errors[name]
  const helperText = !!errors[name] ? errors[name].message : ''
  return { error, helperText }
}
