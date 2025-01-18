import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import { IcFormDot, IcFormDotdot } from '@svgs';

import { inputTitle, inputContainer, inputStyle } from './Input.css';

const Label = ({
  htmlFor,
  children,
}: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label htmlFor={htmlFor} className={inputTitle}>
    <IcFormDot width={20} height={20} />
    {children} <IcFormDotdot width={10} height={20} />
  </label>
);

const InputField = ({
  id,
  value,
  onChange,
  placeholder,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={inputStyle({ state: value ? 'active' : 'default' })}
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

const Input = ({ children }: { children: ReactNode }) => {
  return <div className={inputContainer}>{children}</div>;
};

Input.Label = Label;
Input.InputField = InputField;

export default Input;
