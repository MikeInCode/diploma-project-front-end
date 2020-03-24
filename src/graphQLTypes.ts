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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUniversity
// ====================================================

export interface GetUniversity_university_institutes {
  id: string;
  name: string;
}

export interface GetUniversity_university_departments {
  id: string;
  name: string;
}

export interface GetUniversity_university_specialities {
  id: string;
  code: string;
  name: string;
}

export interface GetUniversity_university_groups {
  id: string;
  name: string;
}

export interface GetUniversity_university {
  institutes: GetUniversity_university_institutes[];
  departments: GetUniversity_university_departments[];
  specialities: GetUniversity_university_specialities[];
  groups: GetUniversity_university_groups[];
}

export interface GetUniversity {
  university: GetUniversity_university;
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

export interface LoginInput {
  username: string;
  password: string;
}

export interface UpdateProfileInput {
  image: string;
  email: string;
  phone: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
