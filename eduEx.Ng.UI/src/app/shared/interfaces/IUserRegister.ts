// here we should have all the fields needed by the server
// rememeber we use Interface to have auto-completion
export interface IUserRegister{
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  password: string;
  confirmPassword: string;
}
