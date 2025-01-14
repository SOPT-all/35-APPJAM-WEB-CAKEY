import { useState } from 'react';

import {
  storeAddressStyle,
  storeCardimageList,
  storeCardInformation,
  storeCardLayout,
  storeCardWrapper,
  storeNameLabel,
  storeNameStyle,
} from './StoreCard.css';
import IconButton from '../IconButton/IconButton';
import Image from '../Image/Image';
import Label from '../Label/Label';

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
              <p className={storeNameStyle}>{storeName}</p>
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
        <div className={storeCardimageList}>
          {imageList.map((image, index) => (
            <Image key={index} src={image.src} width={'100%'} />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreCard;
