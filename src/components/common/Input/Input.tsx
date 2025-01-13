import { input, inputTitle, inputWrapper } from './Input.css';

type InputProps = {
  inputLabel: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  inputLabel,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={inputWrapper}>
      <p className={inputTitle}>· {inputLabel} :</p>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={input}
      />
    </div>
  );
};
