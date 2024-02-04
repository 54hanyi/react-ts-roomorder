
export type Email = string
export type Password = string

export interface userLoginForm {
  email: Email,
  password: Password
}

export interface RegisterForm1 extends userLoginForm {
  confirmPassword: string
}

export interface RegisterForm2 extends userLoginForm {
  name: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: string,
    detail: string
  }
}
