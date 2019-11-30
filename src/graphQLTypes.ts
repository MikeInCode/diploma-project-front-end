/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: RoleEnum;
}

export interface LoginUser_loginUser {
  token: string;
  user: LoginUser_loginUser_user;
}

export interface LoginUser {
  loginUser: LoginUser_loginUser;
}

export interface LoginUserVariables {
  input: LoginInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserMe
// ====================================================

export interface UserMe_userMe {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: RoleEnum;
}

export interface UserMe {
  userMe: UserMe_userMe;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum RoleEnum {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
}

export interface LoginInput {
  email: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
