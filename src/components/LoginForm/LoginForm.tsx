import * as React from "react";
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { Button } from "../Button";
import { Input } from "../Input";
import { loginValidation } from "./validation";

import './LoginForm.scss';

export interface IFormProps {
  username:string;
  password:string;
}

export interface IDispatchProps {
  loginAction:() => any;
}

const LoginComponent = (props:IDispatchProps & InjectedFormProps<IFormProps, IDispatchProps>) => (
  <div className="LoginFormWrapper">
    <div className="header">
      <span>Sign In</span>
    </div>
    <div className="bodyWrapper">
      <Field
        id="username"
        name="username"
        placeholder="Enter username"
        type="text"
        component={Input}
      />
      <Field
        id="password"
        name="password"
        placeholder="Enter password"
        type="password"
        component={Input}
      />
      <div className="linkWrapper">
        <a href="/#" className="link">Forgotten password?</a>
      </div>
      <div className="buttonWrapper">
        <Button
          text="Login"
          onClick={() => props.loginAction()}
          isDisabled={props.invalid}
        />
      </div>
    </div>
  </div>
);

export const LoginFormForm = reduxForm<IFormProps, IDispatchProps>({
  form: 'loginForm',
  validate: loginValidation,
})(LoginComponent);
