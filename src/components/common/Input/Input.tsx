import { IcFormDot, IcFormDotdot } from '@svgs';

import { inputTitle, inputContainer, inputStyle } from './Input.css';

type InputProps = {
  inputLabel?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ inputLabel, value, onChange, placeholder }: InputProps) => {
  return (
    <div className={inputContainer}>
      <label htmlFor={value} className={inputTitle}>
        <IcFormDot width={20} height={20} />
        {inputLabel} <IcFormDotdot width={10} height={20} />
      </label>
      <input
        className={inputStyle({ state: value ? 'active' : 'default' })}
        type="text"
        id={value}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
