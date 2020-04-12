/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user_institute {
  id: string;
  name: string;
}

export interface Login_login_user_department {
  id: string;
  name: string;
}

export interface Login_login_user_speciality {
  id: string;
  code: string;
  name: string;
}

export interface Login_login_user_group {
  id: string;
  name: string;
}

export interface Login_login_user {
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  username: string;
  role: RolesEnum;
  email: string | null;
  phone: string | null;
  institute: Login_login_user_institute;
  department: Login_login_user_department | null;
  speciality: Login_login_user_speciality | null;
  group: Login_login_user_group | null;
  course: CourseEnum | null;
}

export interface Login_login {
  token: string;
  user: Login_login_user;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input: LoginInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfile
// ====================================================

export interface GetProfile_profile_institute {
  id: string;
  name: string;
}

export interface GetProfile_profile_department {
  id: string;
  name: string;
}

export interface GetProfile_profile_speciality {
  id: string;
  code: string;
  name: string;
}

export interface GetProfile_profile_group {
  id: string;
  name: string;
}

export interface GetProfile_profile {
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  username: string;
  role: RolesEnum;
  email: string | null;
  phone: string | null;
  institute: GetProfile_profile_institute;
  department: GetProfile_profile_department | null;
  speciality: GetProfile_profile_speciality | null;
  group: GetProfile_profile_group | null;
  course: CourseEnum | null;
}

export interface GetProfile {
  profile: GetProfile_profile;
}

export interface GetProfileVariables {
  id?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile_institute {
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile_department {
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile_speciality {
  id: string;
  code: string;
  name: string;
}

export interface UpdateProfile_updateProfile_group {
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile {
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  username: string;
  role: RolesEnum;
  email: string | null;
  phone: string | null;
  institute: UpdateProfile_updateProfile_institute;
  department: UpdateProfile_updateProfile_department | null;
  speciality: UpdateProfile_updateProfile_speciality | null;
  group: UpdateProfile_updateProfile_group | null;
  course: CourseEnum | null;
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile;
}

export interface UpdateProfileVariables {
  input: UpdateProfileInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUser
// ====================================================

export interface UpdateUser_updateUser_institute {
  id: string;
  name: string;
}

export interface UpdateUser_updateUser_department {
  id: string;
  name: string;
}

export interface UpdateUser_updateUser_speciality {
  id: string;
  code: string;
  name: string;
}

export interface UpdateUser_updateUser_group {
  id: string;
  name: string;
}

export interface UpdateUser_updateUser {
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  username: string;
  role: RolesEnum;
  email: string | null;
  phone: string | null;
  institute: UpdateUser_updateUser_institute;
  department: UpdateUser_updateUser_department | null;
  speciality: UpdateUser_updateUser_speciality | null;
  group: UpdateUser_updateUser_group | null;
  course: CourseEnum | null;
}

export interface UpdateUser {
  updateUser: UpdateUser_updateUser;
}

export interface UpdateUserVariables {
  id: string;
  input: UpdateUserInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSchedule
// ====================================================

export interface GetSchedule_schedule_scheduledSubject_subject {
  id: string;
  name: string;
  ECTS: string;
  subjectCode: string;
  subjectType: SubjectTypeEnum;
}

export interface GetSchedule_schedule_scheduledSubject_group {
  id: string;
  name: string;
}

export interface GetSchedule_schedule_scheduledSubject_teacher {
  id: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
}

export interface GetSchedule_schedule_scheduledSubject {
  id: string;
  subject: GetSchedule_schedule_scheduledSubject_subject;
  group: GetSchedule_schedule_scheduledSubject_group;
  teacher: GetSchedule_schedule_scheduledSubject_teacher;
}

export interface GetSchedule_schedule {
  id: string;
  startTime: string;
  endTime: string;
  room: string;
  scheduledSubject: GetSchedule_schedule_scheduledSubject;
}

export interface GetSchedule {
  schedule: GetSchedule_schedule[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudents
// ====================================================

export interface GetStudents_students_group_speciality_department_institute {
  id: string;
  name: string;
}

export interface GetStudents_students_group_speciality_department {
  id: string;
  name: string;
  institute: GetStudents_students_group_speciality_department_institute;
}

export interface GetStudents_students_group_speciality {
  id: string;
  name: string;
  code: string;
  department: GetStudents_students_group_speciality_department;
}

export interface GetStudents_students_group {
  id: string;
  name: string;
  course: CourseEnum;
  speciality: GetStudents_students_group_speciality;
}

export interface GetStudents_students {
  id: string;
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  email: string | null;
  phone: string | null;
  group: GetStudents_students_group;
}

export interface GetStudents {
  students: GetStudents_students[];
}

export interface GetStudentsVariables {
  groupId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTeachers
// ====================================================

export interface GetTeachers_teachers_department_institute {
  id: string;
  name: string;
}

export interface GetTeachers_teachers_department {
  id: string;
  name: string;
  institute: GetTeachers_teachers_department_institute;
}

export interface GetTeachers_teachers_teacherScheduledSubjects_subject {
  id: string;
  name: string;
  ECTS: string;
  subjectCode: string;
  subjectType: SubjectTypeEnum;
}

export interface GetTeachers_teachers_teacherScheduledSubjects {
  id: string;
  subject: GetTeachers_teachers_teacherScheduledSubjects_subject;
}

export interface GetTeachers_teachers {
  id: string;
  image: string | null;
  lastName: string;
  firstName: string;
  patronymicName: string;
  email: string | null;
  phone: string | null;
  department: GetTeachers_teachers_department;
  teacherScheduledSubjects: GetTeachers_teachers_teacherScheduledSubjects[];
}

export interface GetTeachers {
  teachers: GetTeachers_teachers[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAcademicUnits
// ====================================================

export interface GetAcademicUnits_academicUnits_institutes {
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_departments {
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_specialities {
  id: string;
  code: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_groups {
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits {
  institutes: GetAcademicUnits_academicUnits_institutes[];
  departments: GetAcademicUnits_academicUnits_departments[];
  specialities: GetAcademicUnits_academicUnits_specialities[];
  groups: GetAcademicUnits_academicUnits_groups[];
}

export interface GetAcademicUnits {
  academicUnits: GetAcademicUnits_academicUnits;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetGroups
// ====================================================

export interface GetGroups_groups_speciality_department_institute {
  id: string;
  name: string;
}

export interface GetGroups_groups_speciality_department {
  id: string;
  name: string;
  institute: GetGroups_groups_speciality_department_institute;
}

export interface GetGroups_groups_speciality {
  id: string;
  name: string;
  code: string;
  department: GetGroups_groups_speciality_department;
}

export interface GetGroups_groups {
  id: string;
  name: string;
  course: CourseEnum;
  speciality: GetGroups_groups_speciality;
}

export interface GetGroups {
  groups: GetGroups_groups[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CourseEnum {
  FIVE = "FIVE",
  FOUR = "FOUR",
  ONE = "ONE",
  SIX = "SIX",
  THREE = "THREE",
  TWO = "TWO",
}

export enum RolesEnum {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export enum SubjectTypeEnum {
  LABORATORY = "LABORATORY",
  LECTURE = "LECTURE",
  SEMINAR = "SEMINAR",
  TUTORIALS = "TUTORIALS",
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface UpdateProfileInput {
  image: string;
  email: string;
  phone: string;
}

export interface UpdateUserInput {
  image: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
  email: string;
  phone: string;
  department?: string | null;
  group?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
