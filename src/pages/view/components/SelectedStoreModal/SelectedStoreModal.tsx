import { useFetchStoreInfo } from '@apis/store';
import { useFetchCakeInfo } from '@apis/view';

import { IconButton, Image, Label, TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import {
  modalContainer,
  imageSection,
  infoSection,
  textWrapper,
  storeNameWrapper,
  addressWrapper,
  addressStyle,
} from './SelectedStoreModal.css';

import { SelectedModalType } from '@types';

const SelectedStoreModal = ({ storeId, cakeId }: SelectedModalType) => {
  const { goStorePage } = useEasyNavigate();
  const { data: storeData } = useFetchStoreInfo(storeId);
  const { data: cakeData } = useFetchCakeInfo(cakeId ?? 0);
  const displayData = cakeData ?? storeData;
  return (
    <div className={modalContainer}>
      <section className={imageSection}>
        <Image src={displayData.imageUrl} variant="rounded" />
      </section>

      <section className={infoSection}>
        <div className={textWrapper}>
          <div className={storeNameWrapper}>
            <h1>{displayData.storeName}</h1>
            <IconButton
              buttonType={'save24'}
              isActive={displayData.isLiked}
              itemId={storeId}
            />
          </div>
          <div className={addressWrapper}>
            <div className={addressStyle}>{displayData.address}</div>
            <Label text={displayData.station} />
          </div>
        </div>

        <TextButton size="small" onClick={() => goStorePage(storeId)}>
          상세보기
        </TextButton>
      </section>
    </div>
  );
};

export default SelectedStoreModal;
