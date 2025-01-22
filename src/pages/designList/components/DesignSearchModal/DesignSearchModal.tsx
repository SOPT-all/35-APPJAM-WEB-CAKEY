import { useFetchDesignDetail } from '@apis/designList/useFetchDesignDetail';

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

import { CategoryType, SubCategoryType } from '@types';

interface DesignSearchModalProps {
  storeId: number;
  cakeId: number;
  selectedCategories?: {
    category: CategoryType;
    subCategory: SubCategoryType;
  };
}

const DesignSearchModal = ({
  storeId,
  cakeId,
  selectedCategories,
}: DesignSearchModalProps) => {
  const { data, isLoading } = useFetchDesignDetail(
    cakeId,
    selectedCategories?.category ?? 'BIRTH',
    selectedCategories?.subCategory ?? 'ALL'
  );

  const { goStorePage } = useEasyNavigate();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (!data) {
    return <div>데이터 없음...</div>;
  }

  console.log(cakeId);

  const { storeName, station, cake } = data;

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
