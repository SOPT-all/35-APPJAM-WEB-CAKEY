import { HTMLAttributes } from 'react';

import { IconButton, Image, Label, Modal } from '@components';
import { useModal } from '@hooks';
import DesignSearchModal from '@pages/designList/components/DesignSearchModal/DesignSearchModal';

import {
  container,
  infoContainer,
  infoWrapper,
  infoTitleStyle,
} from './DesignCard.css';

import { DesignItemType } from '@types';
interface DesignCardProps extends HTMLAttributes<HTMLDivElement> {
  designItem: DesignItemType;
  designId: number;
  numberLabel?: string;
  hasModal?: boolean;
}

const DesignCard = ({
  designItem,
  designId,
  numberLabel,
  hasModal = false,
}: DesignCardProps) => {
  const { storeId, imageUrl, storeName, station, likeCount, isLiked } =
    designItem;

  const { isModalOpen, openModal, closeModal } = useModal();

  const handleCardClick = () => {
    if (hasModal) {
      openModal(); // 둘러보기 페이지에서는 모달 띄우기
    } else {
      console.log('디자인카드 클릭', storeId); // 나머지 페이지에선 상세보기로 이동
    }
  };

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
            count={likeCount}
            isActive={isLiked}
            itemId={designId}
          />
        </div>
      </article>

      {isModalOpen && (
        <Modal variant="bottom" hasBackdrop backdropClick={closeModal}>
          <DesignSearchModal storeId={storeId} />
        </Modal>
      )}
    </>
  );
};

export default DesignCard;
