import { Label, TextButton } from '@components';

import {
  buttonWrapper,
  carouselWrapper,
  infoWrapper,
  searchModalContainer,
  storeNameStyle,
  textWrapper,
} from './DesignSearchModal.css';
import Carousel from '../Carousel/Carousel';

import { DesignDetailType } from '@types';

interface StoreDesignDetailType {
  storeId: number;
  storeName: string;
  station: string;
  cakes: DesignDetailType[];
}

interface DesignSearchModalProps {
  designDetailItem: StoreDesignDetailType;
  storeId: number;
}

const DesignSearchModal = ({ designDetailItem, storeId }: DesignSearchModalProps) => {
  const { storeName, station, cakes } = designDetailItem;
  return (
    <div className={searchModalContainer}>
      <section className={carouselWrapper}>
        <Carousel designs={cakes} storeId={storeId} />
      </section>

      <section className={infoWrapper}>
        <div className={textWrapper}>
          <h1 className={storeNameStyle}>{storeName}</h1>
          <Label text={station} />
        </div>

        <div className={buttonWrapper}>
          <TextButton size="small">상세보기</TextButton>
        </div>
      </section>
    </div>
  );
};

export default DesignSearchModal;
