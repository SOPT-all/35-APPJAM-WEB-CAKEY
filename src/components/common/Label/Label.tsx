import * as styles from './label.css';

export const Label = ({ text = '지하철 역' }) => {
  return <p className={styles.label}>{text}</p>;
};
