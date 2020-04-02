export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/:id',
  PROFILE_EDIT_LINK: (id: string) => `/profile/${id}`,
  STUDENTS: '/students/:groupId',
  STUDENTS_LINK: (groupId: string) => `/students/${groupId}`,
  TEACHERS: '/teachers',
  NOT_FOUND: '/*'
}
