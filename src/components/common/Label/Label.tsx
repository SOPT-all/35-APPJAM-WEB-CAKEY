import { label } from './label.css';

const Label = ({ text = '지하철 역' }) => {
  return <p className={label}>{text}</p>;
};

export default Label;
