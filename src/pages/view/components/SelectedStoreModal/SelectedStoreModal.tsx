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

const storeData = {
  storeName: '버터뭉',
  address: '서울 중구 동호로 285-2 아이디어회관 301호',
  station: '홍대입구역',
  isLiked: true,
  imageUrl: '/example-img.png',
  storeLikesCount: 13000,
};

interface SelectedStoreModalProps {
  storeId: number;
}
const SelectedStoreModal = ({ storeId }: SelectedStoreModalProps) => {
  const { goStorePage } = useEasyNavigate();

  return (
    <div className={modalContainer}>
      <section className={imageSection}>
        <Image src={storeData.imageUrl} variant="rounded" />
      </section>

      <section className={infoSection}>
        <div className={textWrapper}>
          <div className={storeNameWrapper}>
            <h1>{storeData.storeName}</h1>
            <IconButton buttonType={'save24'} />
          </div>
          <div className={addressWrapper}>
            <p className={addressStyle}>
              서울 중구 동호로 385-2 아이디어회관
              301호호호sdkjhfkdksnkjnds호호호호
            </p>
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
