import { IFormProps } from "./LoginForm";

interface IErrorsForm {
  username?:string;
  password?:string;
}

export const loginValidation = (values:IFormProps) => {
  const errors:IErrorsForm = {};

  if(!values.password) {
    errors.password = "Please provide password";
  }

  if(!values.username) {
    errors.username = "Please provide username";
  }

  return errors;
};
