import * as React from 'react';
import { connect } from 'react-redux';
import { IDispatchProps, LoginFormForm } from './LoginForm';
import actions from './actions';

const LoginFormContainer = (props:IDispatchProps) => <LoginFormForm {...props} />;

export const LoginForm = connect<null, IDispatchProps>(null, actions)(LoginFormContainer);
