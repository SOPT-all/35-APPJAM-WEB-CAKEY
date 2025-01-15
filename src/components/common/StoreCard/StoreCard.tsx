import { HTMLAttributes } from 'react';

import { IconButton, Image, Label } from '@components';

import {
  roundedLeftImage,
  roundedRightImage,
  storeAddressStyle,
  storeCardContainer,
  storeCardImageList,
  storeCardInformation,
  storeCardWrapper,
  storeNameLabel,
  storeNameStyle,
} from './StoreCard.css';

import { StoreType } from '@types';

const MAX_STORE_NAME_LENGTH = 7;

interface StoreCardProps extends HTMLAttributes<HTMLButtonElement> {
  storeItem: StoreType;
}

const StoreCard = ({ storeItem }: StoreCardProps) => {
  const {
    storeId,
    storeName,
    station,
    address,
    isLiked,
    storeLikesCount,
    images,
  } = storeItem;

  const storeNameMax =
    storeName.length > MAX_STORE_NAME_LENGTH
      ? `${storeName.slice(0, MAX_STORE_NAME_LENGTH)}..`
      : storeName;

  const handleCardClick = () => {
    console.log('스토어카드 클릭', storeId);
  };

  return (
    <article className={storeCardContainer} onClick={handleCardClick}>
      <div className={storeCardWrapper}>
        <div className={storeCardInformation}>
          <div className={storeNameLabel}>
            <h1 className={storeNameStyle}>{storeNameMax}</h1>
            <Label text={station} />
          </div>
          <p className={storeAddressStyle}>{address}</p>
        </div>
        <IconButton
          buttonType={'save'}
          isActive={isLiked}
          count={storeLikesCount}
          itemId={storeId}
        />
      </div>
      <div className={storeCardImageList}>
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === 0
                ? roundedLeftImage
                : index === images.length - 1
                  ? roundedRightImage
                  : ''
            }
          >
            <Image key={storeId} src={image.imageUrl} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default StoreCard;
