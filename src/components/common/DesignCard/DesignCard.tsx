import { HTMLAttributes } from 'react';

import { IconButton, Image, Label } from '@components';

import {
  container,
  infoContainer,
  infoWrapper,
  infoTitleStyle,
} from './DesignCard.css';

import { DesignItemType } from '@types';
interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  designItem: DesignItemType;
  numberLabel?: string;
}

const DesignCard = ({ designItem, numberLabel, onClick }: DesignCardProps) => {
  const { imageUrl, storeName, station, likeCount, isLiked } = designItem;

  return (
    <article className={container} onClick={onClick}>
      <Image src={imageUrl} variant="rounded" numberLabel={numberLabel}/>
      <div className={infoContainer}>
        <div className={infoWrapper}>
          <h1 className={infoTitleStyle}>{storeName}</h1>
          <Label text={station} />
        </div>
        <IconButton buttonType="like20" count={likeCount} isActive={isLiked} />
      </div>
    </article>
  );
};

export default DesignCard;
