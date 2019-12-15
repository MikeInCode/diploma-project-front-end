/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
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
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile;
}

export interface UpdateProfileVariables {
  input: UserInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfile
// ====================================================

export interface GetProfile_profile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}

export interface GetProfile {
  profile: GetProfile_profile;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface UserInput {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  role?: Role | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
