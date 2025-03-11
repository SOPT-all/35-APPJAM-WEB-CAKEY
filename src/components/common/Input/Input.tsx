import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

import { IcFormDot, IcFormDotdot, IcSearch, IcXCircle } from '@svgs';

import {
  inputTitle,
  inputContainer,
  inputStyle,
  inputStationStyle,
  iconStyle,
  inputWrapper,
} from './Input.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'station';
  hasIcon?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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
  variant = 'default',
  hasIcon = false,
}: InputFieldProps) => {
  const handleClearInput = () => {
    onChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className={inputWrapper}>
      <input
        className={
          variant === 'default'
            ? inputStyle({ state: value ? 'active' : 'default' })
            : inputStationStyle
        }
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />

      {hasIcon && (
        <div className={iconStyle}>
          {value ? (
            <button onClick={handleClearInput}>
              <IcXCircle width={20} height={20} />
            </button>
          ) : (
            <button>
              <IcSearch width={20} height={20} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const Input = ({ children }: { children: ReactNode }) => {
  return <div className={inputContainer}>{children}</div>;
};

Input.Label = Label;
Input.InputField = InputField;

export default Input;
