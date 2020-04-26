export const getUserInitials = (
  firstName: string,
  lastName: string,
  endSymbol = ''
) => `${firstName[0]}${endSymbol}${lastName[0]}${endSymbol}`
