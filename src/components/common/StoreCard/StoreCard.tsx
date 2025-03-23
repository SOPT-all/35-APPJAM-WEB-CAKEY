import { HTMLAttributes } from 'react';

import { IconButton, Image, Label } from '@components';
import { useEasyNavigate } from '@hooks';

import {
  imageDiv,
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

import { SelectedModalType, StoreType } from '@types';

const MAX_STORE_NAME_LENGTH = 7;

interface StoreCardProps extends HTMLAttributes<HTMLButtonElement> {
  storeItem: StoreType;
  onSelectStore?: ({storeId, cakeId}: SelectedModalType) => void;
}

const StoreCard = ({ storeItem, onSelectStore }: StoreCardProps) => {
  const {
    storeId,
    storeName,
    station,
    address,
    isLiked,
    storeLikesCount,
    images,
  } = storeItem;

  const { goStorePage } = useEasyNavigate();

  const storeNameMax =
    storeName.length > MAX_STORE_NAME_LENGTH
      ? `${storeName.slice(0, MAX_STORE_NAME_LENGTH)}..`
      : storeName;

  const handleCardClick = () => {
    if (onSelectStore) {
      onSelectStore({storeId, cakeId: 0});
    } else {
      goStorePage(storeId);
    }
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
          buttonType={'save24'}
          isActive={isLiked}
          count={storeLikesCount}
          itemId={storeId}
        />
      </div>
      <div className={storeCardImageList}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${imageDiv} ${
              index === 0
                ? roundedLeftImage
                : index === images.length - 1
                  ? roundedRightImage
                  : ''
            }`}
          >
            <Image key={storeId} src={image.imageUrl} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default StoreCard;
