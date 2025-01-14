import { useState } from 'react';

import {
  roundedLeftImage,
  roundedRightImage,
  storeAddressStyle,
  storeCardImageList,
  storeCardInformation,
  storeCardLayout,
  storeCardWrapper,
  storeNameLabel,
  storeNameStyle,
} from './StoreCard.css';
import IconButton from '../IconButton/IconButton';
import Image from '../Image/Image';
import Label from '../Label/Label';

const maxStoreNameLength = 7;

const StoreCard = ({
  storeName = '스토어 이름',
  storeAddress = '스토어 주소',
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [saveCount, setSaveCount] = useState(0);

  const handleSaveClick = () => {
    setIsSaved((prev) => !prev);
    setSaveCount((prev) => (isSaved ? prev - 1 : prev + 1));
  };

  const storeNameMax =
    storeName.length > maxStoreNameLength
      ? `${storeName.slice(0, maxStoreNameLength)}...`
      : storeName;

  const imageList = [
    { src: 'example-img.png' },
    { src: 'example-img.png' },
    { src: 'example-img.png' },
    { src: 'example-img.png' },
  ];

  return (
    <>
      <div className={storeCardWrapper}>
        <div className={storeCardLayout}>
          <div className={storeCardInformation}>
            <div className={storeNameLabel}>
              <h1 className={storeNameStyle}>{storeNameMax}</h1>
              <Label />
            </div>
            <p className={storeAddressStyle}>{storeAddress}</p>
          </div>
          <IconButton
            buttonType={'save'}
            isActive={isSaved}
            count={saveCount}
            onMap={false}
            onClick={handleSaveClick}
          />
        </div>
        <div className={storeCardImageList}>
          {imageList.map((image, index) => (
            <div
              key={index}
              className={
                index === 0
                  ? roundedLeftImage
                  : index === imageList.length - 1
                    ? roundedRightImage
                    : ''
              }
            >
              <Image key={index} src={image.src} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreCard;
