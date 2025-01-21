import { Label, TextButton } from '@components';
import { useEasyNavigate } from '@hooks';

import {
  buttonWrapper,
  carouselWrapper,
  infoWrapper,
  searchModalContainer,
  storeNameStyle,
  textWrapper,
} from './DesignSearchModal.css';
import Carousel from '../Carousel/Carousel';

interface DesignSearchModalCakesType {
  cakeId: number;
  isLiked: boolean;
  imageUrl: string;
}

interface DesignSearchModalType {
  storeId: number;
  storeName: string;
  station: string;
  cake: DesignSearchModalCakesType[];
}

interface DesignSearchModalProps {
  storeId: number;
  data: DesignSearchModalType;
}

// const designDetailItem = {
//   storeId: 1,
//   storeName: '케이크케이크케이크케이크',
//   station: '종로5가역',
//   cakes: [
//     {
//       cakeId: 1,
//       isLiked: true,
//       imageUrl: '../public/example-img.png',
//     },
//     {
//       cakeId: 5,
//       isLiked: false,
//       imageUrl: '../public/example-img.png',
//     },
//     {
//       cakeId: 3,
//       isLiked: true,
//       imageUrl: '../public/example-img.png',
//     },
//     {
//       cakeId: 2,
//       isLiked: true,
//       imageUrl: '../public/example-img.png',
//     },
//   ],
// };

const DesignSearchModal = ({ storeId, data }: DesignSearchModalProps) => {
  const { storeName, station, cake } = data; // 추후 서버에서 받아올 데이터

  const { goStorePage } = useEasyNavigate();

  return (
    <div className={searchModalContainer}>
      <section className={carouselWrapper}>
        <Carousel designs={cake} storeId={storeId} />
      </section>

      <section className={infoWrapper}>
        <div className={textWrapper}>
          <h1 className={storeNameStyle}>{storeName}</h1>
          <Label text={station} />
        </div>

        <div className={buttonWrapper}>
          <TextButton size="small" onClick={() => goStorePage(storeId)}>
            상세보기
          </TextButton>
        </div>
      </section>
    </div>
  );
};

export default DesignSearchModal;
