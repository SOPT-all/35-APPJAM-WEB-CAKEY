import { chip } from './Chip.css';

interface ChipProps {
  text: string;
  isSelected?: boolean;
}

const Chip = ({ text, isSelected = false }: ChipProps) => {
  return <p className={chip({ isSelected })}>{text}</p>;
};

export default Chip;
