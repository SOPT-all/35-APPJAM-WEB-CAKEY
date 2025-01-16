import { inputTitle, inputContainer, inputStyle } from './Input.css';

type InputProps = {
  inputLabel: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({ inputLabel, value, onChange, placeholder }: InputProps) => {
  return (
    <div className={inputContainer}>
      <p className={inputTitle}>· {inputLabel} :</p>
      <input
        className={inputStyle({ state: value ? 'active' : 'default' })}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
