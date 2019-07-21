import * as React from "react";
import './Button.scss';

interface IProps {
  text:string;
  isDisabled?:boolean;
}

interface IDispatchProps {
  onClick: () => any;
}

export const Button:React.FC<IProps & IDispatchProps> = (props:IProps & IDispatchProps) => (
  <button onClick={() => props.onClick()} className="button" disabled={props.isDisabled}>
    {props.text}
  </button>
);
