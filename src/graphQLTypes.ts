export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export type AuthenticatedUser = {
  token: Scalars['String'],
  user: User,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type LoginInput = {
  email: Scalars['String'],
  password: Scalars['String'],
};

export type Mutation = {
  loginUser: AuthenticatedUser,
};


export type MutationLoginUserArgs = {
  input: LoginInput
};

export type Query = {
  userMe: User,
};

export enum RoleEnum {
  Student = 'STUDENT',
  Admin = 'ADMIN',
  Teacher = 'TEACHER'
}


export type User = {
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  role: RoleEnum,
};

export type LoginUserMutationVariables = {
  input: LoginInput
};


export type LoginUserMutation = { loginUser: { token: string, user: { id: string } } };

export type UserMeQueryVariables = {};


export type UserMeQuery = { userMe: { id: string, firstName: string, lastName: string, email: string, role: RoleEnum } };
