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
}

const DesignCard = ({ designItem }: DesignCardProps) => {
  const { storeId, cakeId, imageUrl, storeName, station, likeCount, isLiked } =
    designItem;

  const handleCardClick = () => {
    console.log('디자인카드 클릭', storeId);
  };

  return (
    <article className={container} onClick={handleCardClick}>
      <Image src={imageUrl} variant="rounded" />
      <div className={infoContainer}>
        <div className={infoWrapper}>
          <h1 className={infoTitleStyle}>{storeName}</h1>
          <Label text={station} />
        </div>
        <IconButton
          buttonType="like20"
          count={likeCount}
          isActive={isLiked}
          itemId={cakeId}
        />
      </div>
    </article>
  );
};

export default DesignCard;
