import { HTMLAttributes } from 'react';

import { useFetchDesignDetail } from '@apis/designList/useFetchDesignDetail';

import { IconButton, Image, Label, Modal } from '@components';
import { useEasyNavigate, useModal } from '@hooks';
import DesignSearchModal from '@pages/designList/components/DesignSearchModal/DesignSearchModal';

import {
  container,
  infoContainer,
  infoWrapper,
  infoTitleStyle,
} from './DesignCard.css';

import { CategoryType, DesignItemType, SubCategoryType } from '@types';
interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  designItem: DesignItemType;
  designId: number;
  numberLabel?: string;
  hasModal?: boolean;
  handleCardClick?: () => void;
  selectedCategories?: {
    category: CategoryType;
    subCategory: SubCategoryType;
  };
}

const DesignCard = ({
  designItem,
  designId,
  numberLabel,
  hasModal = false,
  selectedCategories,
}: DesignCardProps) => {
  const {
    cakeId,
    storeId,
    imageUrl,
    storeName,
    station,
    cakeLikesCount,
    isLiked,
  } = designItem;

  const { goStorePage } = useEasyNavigate();

  const { openModal, isModalOpen, closeModal } = useModal();

  const handleCardClick = () => {
    if (hasModal) {
      openModal(); // 둘러보기 페이지에서는 모달 띄우기
    } else {
      goStorePage(storeId); // 나머지 페이지에선 상세보기로 이동
    }
  };

  const { data, isLoading } = useFetchDesignDetail(
    cakeId,
    selectedCategories?.category ?? 'BIRTH',
    selectedCategories?.subCategory ?? 'ALL',
    {
      enabled: !!hasModal,
    }
  );

  if (isLoading) {
    <div>로딩중...</div>;
  }

  if (!data) {
    <div>데이터 없음...</div>;
  }

  console.log(data);

  return (
    <>
      <article className={container} onClick={handleCardClick}>
        <Image src={imageUrl} variant="rounded" numberLabel={numberLabel} />
        <div className={infoContainer}>
          <div className={infoWrapper}>
            <h1 className={infoTitleStyle}>{storeName}</h1>
            <Label text={station} />
          </div>
          <IconButton
            buttonType="like20"
            count={cakeLikesCount}
            isActive={isLiked}
            itemId={designId}
          />
        </div>
      </article>

      {isModalOpen && data && (
        <Modal variant="bottom" hasBackdrop backdropClick={closeModal}>
          <DesignSearchModal storeId={storeId} data={data} />
        </Modal>
      )}
    </>
  );
};

export default DesignCard;
