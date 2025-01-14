import { useState } from 'react';

import { storeCardAddress, storeCardName } from './StoreCard.css';
import IconButton from '../IconButton/IconButton';
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

  return (
    <>
      <div>
        <div>
          <p className={storeCardName}>{storeName}</p>
          <Label />
        </div>
        <p className={storeCardAddress}>{storeAddress}</p>
      </div>
      <IconButton
        buttonType={'save'}
        isActive={isSaved}
        count={saveCount}
        onMap={false}
        onClick={handleSaveClick}
      />
    </>
  );
};

export default StoreCard;
