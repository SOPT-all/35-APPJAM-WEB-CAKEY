import { useFetchStoreInfo } from '@apis/store';

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

interface SelectedStoreModalProps {
  storeId: number;
}
const SelectedStoreModal = ({ storeId }: SelectedStoreModalProps) => {
  const { goStorePage } = useEasyNavigate();
  const { data: storeData } = useFetchStoreInfo(storeId);

  return (
    <div className={modalContainer}>
      <section className={imageSection}>
        <Image src={storeData.imageUrl} variant="rounded" />
      </section>

      <section className={infoSection}>
        <div className={textWrapper}>
          <div className={storeNameWrapper}>
            <h1>{storeData.storeName}</h1>
            <IconButton
              buttonType={'save24'}
              isActive={storeData.isLiked}
              itemId={storeId}
            />
          </div>
          <div className={addressWrapper}>
            <div className={addressStyle}>{storeData.address}</div>
            <Label text={storeData.station} />
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
