import {
  cardStyle,
  sizeContainer,
  sizeImgContainer,
  textContainer,
} from './SizeCard.css';
import Chip from '../Chip/Chip';
import { sizeMapping } from '@constants';

interface SizeCardProps {
  sizeName: string;
  price: string;
  isSelected?: boolean;
  onSelect: () => void;
}

const SizeCard = ({
  sizeName,
  price,
  isSelected = false,
  onSelect,
}: SizeCardProps) => {
  const { chipText, image: sizeImg } = sizeMapping[sizeName] || {};

  return (
    <li className={cardStyle({ isSelected })} onClick={onSelect}>
      <div className={textContainer}>
        <div className={sizeContainer}>
          <span>{sizeName}</span>
          <Chip text={chipText} isSelected={isSelected} />
        </div>
        <span>{price}~</span>
      </div>
      <div className={sizeImgContainer({ sizeName, isSelected })}>
        {sizeImg}
      </div>
    </li>
  );
};

export default SizeCard;
