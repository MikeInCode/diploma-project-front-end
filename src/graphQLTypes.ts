/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user_institute {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface Login_login_user_department {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface Login_login_user_speciality {
  __typename: "UserAcademicExtendedUnit";
  id: string;
  code: string;
  name: string;
}

export interface Login_login_user_group {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface Login_login_user {
  __typename: "User";
  id: string;
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
  __typename: "AuthenticatedUser";
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
// GraphQL query operation: GetChats
// ====================================================

export interface GetChats_chats_interlocutor {
  __typename: "ChatInterlocutor";
  id: string;
  image: string | null;
  lastName: string;
  firstName: string;
}

export interface GetChats_chats_lastMessage {
  __typename: "Message";
  id: string;
  text: string;
  date: string;
  isRead: boolean;
}

export interface GetChats_chats {
  __typename: "Chat";
  id: string;
  interlocutor: GetChats_chats_interlocutor;
  lastMessage: GetChats_chats_lastMessage | null;
  unreadCount: number;
}

export interface GetChats {
  chats: GetChats_chats[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMessages
// ====================================================

export interface GetMessages_messages_sender {
  __typename: "ChatInterlocutor";
  id: string;
  image: string | null;
  firstName: string;
  lastName: string;
}

export interface GetMessages_messages {
  __typename: "Message";
  id: string;
  text: string;
  date: string;
  isRead: boolean;
  sender: GetMessages_messages_sender;
}

export interface GetMessages {
  messages: GetMessages_messages[];
}

export interface GetMessagesVariables {
  chatId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMessage
// ====================================================

export interface SendMessage_sendMessage_sender {
  __typename: "ChatInterlocutor";
  id: string;
  image: string | null;
  firstName: string;
  lastName: string;
}

export interface SendMessage_sendMessage {
  __typename: "Message";
  id: string;
  text: string;
  date: string;
  isRead: boolean;
  sender: SendMessage_sendMessage_sender;
}

export interface SendMessage {
  sendMessage: SendMessage_sendMessage;
}

export interface SendMessageVariables {
  input: MessageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: StartChat
// ====================================================

export interface StartChat {
  startChat: string;
}

export interface StartChatVariables {
  interlocutorId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfile
// ====================================================

export interface GetProfile_profile_institute {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetProfile_profile_department {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetProfile_profile_speciality {
  __typename: "UserAcademicExtendedUnit";
  id: string;
  code: string;
  name: string;
}

export interface GetProfile_profile_group {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetProfile_profile {
  __typename: "User";
  id: string;
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
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile_department {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile_speciality {
  __typename: "UserAcademicExtendedUnit";
  id: string;
  code: string;
  name: string;
}

export interface UpdateProfile_updateProfile_group {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile {
  __typename: "User";
  id: string;
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
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateUser_updateUser_department {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateUser_updateUser_speciality {
  __typename: "UserAcademicExtendedUnit";
  id: string;
  code: string;
  name: string;
}

export interface UpdateUser_updateUser_group {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface UpdateUser_updateUser {
  __typename: "User";
  id: string;
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
  __typename: "Subject";
  id: string;
  name: string;
  ECTS: string;
  subjectCode: string;
  subjectType: SubjectTypeEnum;
}

export interface GetSchedule_schedule_scheduledSubject_teacher {
  __typename: "LessonTeacher";
  id: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
}

export interface GetSchedule_schedule_scheduledSubject {
  __typename: "LessonScheduledSubject";
  id: string;
  subject: GetSchedule_schedule_scheduledSubject_subject;
  teacher: GetSchedule_schedule_scheduledSubject_teacher;
}

export interface GetSchedule_schedule {
  __typename: "Lesson";
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
// GraphQL query operation: GetEvaluations
// ====================================================

export interface GetEvaluations_studentMarks_student {
  __typename: "EvaluationStudent";
  lastName: string;
  firstName: string;
  patronymicName: string;
}

export interface GetEvaluations_studentMarks_scheduledSubject_subject {
  __typename: "Subject";
  id: string;
  name: string;
  subjectType: SubjectTypeEnum;
}

export interface GetEvaluations_studentMarks_scheduledSubject {
  __typename: "EvaluationScheduledSubject";
  subject: GetEvaluations_studentMarks_scheduledSubject_subject;
}

export interface GetEvaluations_studentMarks_marks_lesson {
  __typename: "EvaluationLesson";
  id: string;
  startTime: string;
}

export interface GetEvaluations_studentMarks_marks {
  __typename: "EvaluationMark";
  id: string;
  value: MarkValueEnum;
  notes: string | null;
  lesson: GetEvaluations_studentMarks_marks_lesson;
}

export interface GetEvaluations_studentMarks {
  __typename: "Evaluation";
  id: string;
  student: GetEvaluations_studentMarks_student;
  scheduledSubject: GetEvaluations_studentMarks_scheduledSubject;
  marks: GetEvaluations_studentMarks_marks[];
}

export interface GetEvaluations {
  studentMarks: GetEvaluations_studentMarks[];
}

export interface GetEvaluationsVariables {
  studentId?: string | null;
  subjectId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStudents
// ====================================================

export interface GetStudents_students_group_speciality_department_institute {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetStudents_students_group_speciality_department {
  __typename: "Department";
  id: string;
  name: string;
  institute: GetStudents_students_group_speciality_department_institute;
}

export interface GetStudents_students_group_speciality {
  __typename: "Speciality";
  id: string;
  name: string;
  code: string;
  department: GetStudents_students_group_speciality_department;
}

export interface GetStudents_students_group {
  __typename: "Group";
  id: string;
  name: string;
  course: CourseEnum;
  speciality: GetStudents_students_group_speciality;
}

export interface GetStudents_students {
  __typename: "Student";
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
// GraphQL mutation operation: UpdateEvaluation
// ====================================================

export interface UpdateEvaluation_updateEvaluation_student {
  __typename: "EvaluationStudent";
  lastName: string;
  firstName: string;
  patronymicName: string;
}

export interface UpdateEvaluation_updateEvaluation_scheduledSubject_subject {
  __typename: "Subject";
  id: string;
  name: string;
  subjectType: SubjectTypeEnum;
}

export interface UpdateEvaluation_updateEvaluation_scheduledSubject {
  __typename: "EvaluationScheduledSubject";
  subject: UpdateEvaluation_updateEvaluation_scheduledSubject_subject;
}

export interface UpdateEvaluation_updateEvaluation_marks_lesson {
  __typename: "EvaluationLesson";
  id: string;
  startTime: string;
}

export interface UpdateEvaluation_updateEvaluation_marks {
  __typename: "EvaluationMark";
  id: string;
  value: MarkValueEnum;
  notes: string | null;
  lesson: UpdateEvaluation_updateEvaluation_marks_lesson;
}

export interface UpdateEvaluation_updateEvaluation {
  __typename: "Evaluation";
  id: string;
  student: UpdateEvaluation_updateEvaluation_student;
  scheduledSubject: UpdateEvaluation_updateEvaluation_scheduledSubject;
  marks: UpdateEvaluation_updateEvaluation_marks[];
}

export interface UpdateEvaluation {
  updateEvaluation: UpdateEvaluation_updateEvaluation;
}

export interface UpdateEvaluationVariables {
  evaluationId: string;
  input: EvaluationUpdateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSubjects
// ====================================================

export interface GetSubjects_studentSubjects_teacher {
  __typename: "LessonTeacher";
  lastName: string;
  firstName: string;
  patronymicName: string;
}

export interface GetSubjects_studentSubjects_subject {
  __typename: "Subject";
  id: string;
  name: string;
  subjectType: SubjectTypeEnum;
}

export interface GetSubjects_studentSubjects_evaluation_marks_lesson {
  __typename: "EvaluationLesson";
  id: string;
  startTime: string;
}

export interface GetSubjects_studentSubjects_evaluation_marks {
  __typename: "EvaluationMark";
  id: string;
  value: MarkValueEnum;
  notes: string | null;
  lesson: GetSubjects_studentSubjects_evaluation_marks_lesson;
}

export interface GetSubjects_studentSubjects_evaluation {
  __typename: "Evaluation";
  marks: GetSubjects_studentSubjects_evaluation_marks[];
}

export interface GetSubjects_studentSubjects {
  __typename: "StudentSubject";
  teacher: GetSubjects_studentSubjects_teacher;
  subject: GetSubjects_studentSubjects_subject;
  evaluation: GetSubjects_studentSubjects_evaluation | null;
}

export interface GetSubjects {
  studentSubjects: GetSubjects_studentSubjects[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTeachers
// ====================================================

export interface GetTeachers_teachers_department_institute {
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetTeachers_teachers_department {
  __typename: "Department";
  id: string;
  name: string;
  institute: GetTeachers_teachers_department_institute;
}

export interface GetTeachers_teachers_teacherScheduledSubjects_subject {
  __typename: "Subject";
  id: string;
  name: string;
  ECTS: string;
  subjectCode: string;
  subjectType: SubjectTypeEnum;
}

export interface GetTeachers_teachers_teacherScheduledSubjects {
  __typename: "TeacherScheduledSubject";
  id: string;
  subject: GetTeachers_teachers_teacherScheduledSubjects_subject;
}

export interface GetTeachers_teachers {
  __typename: "Teacher";
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
  __typename: "AcademicBaseUnit";
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_departments {
  __typename: "AcademicBaseUnit";
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_specialities {
  __typename: "AcademicExtendedUnit";
  id: string;
  code: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits_groups {
  __typename: "AcademicBaseUnit";
  id: string;
  name: string;
  parentId: string | null;
}

export interface GetAcademicUnits_academicUnits {
  __typename: "AcademicUnits";
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
  __typename: "UserAcademicBaseUnit";
  id: string;
  name: string;
}

export interface GetGroups_groups_speciality_department {
  __typename: "Department";
  id: string;
  name: string;
  institute: GetGroups_groups_speciality_department_institute;
}

export interface GetGroups_groups_speciality {
  __typename: "Speciality";
  id: string;
  name: string;
  code: string;
  department: GetGroups_groups_speciality_department;
}

export interface GetGroups_groups {
  __typename: "Group";
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

export enum MarkValueEnum {
  EMPTY = "EMPTY",
  FIVE = "FIVE",
  FOUR = "FOUR",
  FOUR_AND_A_HALF = "FOUR_AND_A_HALF",
  THREE = "THREE",
  THREE_AND_A_HALF = "THREE_AND_A_HALF",
  TWO = "TWO",
  TWO_AND_A_HALF = "TWO_AND_A_HALF",
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

export interface EvaluationUpdateInput {
  id: string;
  value: MarkValueEnum;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface MessageInput {
  chatId: string;
  text: string;
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
