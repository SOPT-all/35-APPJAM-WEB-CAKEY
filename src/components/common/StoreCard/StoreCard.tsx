import { HTMLAttributes } from 'react';

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
import IconButton from '../IconButton/IconButton';
import Image from '../Image/Image';
import Label from '../Label/Label';

const maxStoreNameLength = 7;

interface StoreImagesType {
  imageId: number;
  imageUrl: string;
}

interface StoreType {
  storeId: number;
  storeName: string;
  station: string;
  address: string;
  isLiked: boolean;
  storeLikesCount: number;
  images: StoreImagesType[];
}

interface StoreCardProps extends HTMLAttributes<HTMLButtonElement> {
  storeItem: StoreType;
}

const StoreCard = ({ storeItem, onClick }: StoreCardProps) => {
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
    storeName.length > maxStoreNameLength
      ? `${storeName.slice(0, maxStoreNameLength)}..`
      : storeName;

  return (
    <>
      <div className={storeCardContainer}>
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
            onMap={false}
            onClick={onClick}
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
      </div>
    </>
  );
};

export default StoreCard;
