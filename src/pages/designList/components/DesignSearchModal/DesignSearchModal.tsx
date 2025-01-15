import { Label, TextButton } from '@components';

import Carousel, { DesignCardDetailType } from '../Carousel';
import {
  buttonWrapper,
  carouselWrapper,
  infoWrapper,
  searchModalContainer,
  storeNameStyle,
  textWrapper,
} from './DesignSearchModal.css';

interface DesignDetailType {
  storeId: number;
  storeName: string;
  station: string;
  cakes: DesignCardDetailType[];
}

interface DesignSearchModalProps {
  data: DesignDetailType;
}

const DesignSearchModal = ({ data }: DesignSearchModalProps) => {
  const { storeId, storeName, station, cakes } = data;
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
