import { ApiResponse } from './api';

export interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: Date;
  address: {
    zipcode: number;
    detail: string;
    city?: string;
    county?: string;
  };
  verificationToken?: string;
}

export type Address = {
  zipcode: number;
  detail: string;
  city?: string;
  county?: string;
  street?: string;
};

export type UserInfo = {
  address: Address;
  name: string;
  phone: string;
  email: string;
};

export type MemberData = UserInfo & {
  _id?: string;
  password: string;
  birthday: string;
  verificationToken?: string;
  createdAt?: string;
  updatedAt?: string;
  countryPhoneCode?: string;
};

export type MemberResponseData = {
  status: boolean;
  token: string;
  result: MemberData;
};

export type MemberPassword = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  password?: string;
};

export type MemberRegisterData = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: Address;
};

export type MemberUpdateDetailData = {
  userId: string;
  name: string;
  phone: string;
  birthday: string;
  address: Address;
};

export type MemberUpdatePwdData = {
  userId: string;
  oldPassword: string;
  newPassword: string;
};

export type MemberUpdateData<T> = T['oldPassword'] extends string ? MemberUpdatePwdData : MemberUpdateDetailData;

export type UserLoginData = {
  email: string | null;
  password: string;
};

export type MemberEditData = UserInfo &
  MemberPassword & {
    _id: string;
    address?: Address;
    city: string;
    birthday?: string;
    countryPhoneCode?: string;
    birthdayYear?: number;
    birthdayMonth?: number;
    birthdayDay?: number;
    check?: boolean;
  };

export type CheckLoginSchema = {
  status: boolean;
  token: string;
};

export type UserResponse = ApiResponse<MemberData> & {
  token?: string;
};

export type VerifyEmailData = {
  email: string;
};

export type ForgotPwdData = {
  email: string;
  code: string;
  newPassword: string;
};
