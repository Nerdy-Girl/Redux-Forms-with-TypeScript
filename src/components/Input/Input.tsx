import * as React from 'react';
import './Input.scss';

interface IProps {
  name:string;
  placeholder:string;
  type:string;
  input:any;
  meta:any;
}

export const Input:React.FC<IProps> = (props:IProps) => {
  const isError = props.meta.touched && props.meta.error;
  const isSuccess = props.meta.touched && !props.meta.error;
  return (
    <div className="inputWrapper">
      <input
        {...props.input}
        type={props.type}
        name={props.name}
        className={`inputWrapper__input ${isError && 'inputError'} ${isSuccess && 'inputSuccess'}`}
        placeholder={props.placeholder}
      />

      {isError &&
      <div className="inputWrapper--error">{props.meta.error}</div>
      }
    </div>
  );
};
