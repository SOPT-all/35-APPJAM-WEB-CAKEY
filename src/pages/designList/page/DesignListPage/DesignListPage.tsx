import { useState } from 'react';

import { CardList, Modal } from '@components';
import { CATEGORY, SUB_CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';
import DesignSearchModal from '@pages/designList/components/DesignSearchModal/DesignSearchModal';
import SubCategoryBar from '@pages/designList/components/SubCategoryBar/SubCategoryBar';
import useModal from 'src/hooks/useModal';

import {
  cardListWrapper,
  categoryContainer,
  categoryWrapper,
  designListPageLayout,
  subCategoryWrapper,
} from './DesignListPage.css';

import { CategoryType, SubCategoryType } from '@types';

const designListPageData = {
  cakeCount: 100,
  cakes: [
    {
      cakeId: 1,
      storeId: 1,
      storeName: '버터뭉',
      station: '홍대입구역',
      isLiked: false,
      likeCount: 200,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 2,
      storeId: 2,
      storeName: '버터뭉2',
      station: '서강대입구역',
      isLiked: true,
      likeCount: 30,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 3,
      storeId: 1,
      storeName: '버터뭉',
      station: '홍대입구역',
      isLiked: false,
      likeCount: 200,
      imageUrl: '../public/example-img.png',
    },
  ],
};

const designItemData = {
  cakeId: 1,
  storeId: 1,
  storeName: '버터뭉',
  station: '홍대입구역',
  isLiked: false,
  likeCount: 200,
  imageUrl: '../public/example-img.png',
};

const data = {
  storeId: 1,
  storeName: '케이크케이크케이크케이크',
  station: '종로5가역',
  cakes: [
    {
      cakeId: 1,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 5,
      isLiked: false,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 3,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
    {
      cakeId: 2,
      isLiked: true,
      imageUrl: '../public/example-img.png',
    },
  ],
};

const DesignListPage = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('BIRTH');
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<SubCategoryType>('ALL');

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };

  const handleSubCategoryChange = (category: SubCategoryType) => {
    setSelectedSubCategory(category);
  };

  return (
    <div className={designListPageLayout}>
      <div className={categoryContainer}>
        <div className={categoryWrapper}>
          <CategoryBar
            categories={CATEGORY}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className={subCategoryWrapper}>
          <SubCategoryBar
            categories={SUB_CATEGORY}
            selectedSubCategory={selectedSubCategory}
            onSubCategoryChange={handleSubCategoryChange}
          />
        </div>
      </div>

      <div className={cardListWrapper}>
        <CardList item="design" />
      </div>
      {/* <button onClick={openModal}>모달 등장!</button> */}
      {/* {isModalOpen && (
        <Modal variant="bottom" backdropClick={closeModal} hasBackdrop>
          <DesignSearchModal designDetailItem={data} storeId={data.storeId} />
        </Modal>
      )} */}
    </div>
  );
};

export default DesignListPage;
