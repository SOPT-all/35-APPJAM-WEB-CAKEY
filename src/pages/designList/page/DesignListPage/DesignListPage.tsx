import { useState } from 'react';

import { Modal } from '@components';
import { CATEGORY, SUB_CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';
import DesignSearchModal from '@pages/designList/components/DesignSearchModal/DesignSearchModal';
import SubCategoryBar from '@pages/designList/components/SubCategoryBar/SubCategoryBar';
import useModal from 'src/hooks/useModal';

import { CategoryType, SubCategoryType } from '@types';

const data = {
  storeId: 1,
  storeName: '햄니케이크',
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
    <>
      <div>
        <CategoryBar
          categories={CATEGORY}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SubCategoryBar
          categories={SUB_CATEGORY}
          selectedSubCategory={selectedSubCategory}
          onSubCategoryChange={handleSubCategoryChange}
        />
      </div>

      <button onClick={openModal}>모달 등장!</button>
      {isModalOpen && (
        <Modal variant="bottom" backdropClick={closeModal} hasBackdrop>
          <DesignSearchModal designDetailItem={data} storeId={data.storeId} />
        </Modal>
      )}
    </>
  );
};

export default DesignListPage;
