import { HTMLAttributes } from 'react';

import {
  container,
  infoContainer,
  infoWrapper,
  infoTitleStyle,
} from './DesignCard.css';
import IconButton from '../IconButton/IconButton';
import Image from '../Image/Image';
import Label from '../Label/Label';

interface DesignItemType {
  imageUrl: string;
  storeName: string;
  station: string;
  likeCount: number;
  isLiked: boolean;
}
interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  designItem: DesignItemType;
}

const DesignCard = ({ designItem, onClick }: DesignCardProps) => {
  const { imageUrl, storeName, station, likeCount, isLiked } = designItem;

  return (
    <div className={container} onClick={onClick}>
      <Image src={imageUrl} variant="rounded" />
      <div className={infoContainer}>
        <div className={infoWrapper}>
          <h1 className={infoTitleStyle}>{storeName}</h1>
          <Label text={station} />
        </div>
        <IconButton buttonType="like20" count={likeCount} isActive={isLiked} />
      </div>
    </div>
  );
};

export default DesignCard;
