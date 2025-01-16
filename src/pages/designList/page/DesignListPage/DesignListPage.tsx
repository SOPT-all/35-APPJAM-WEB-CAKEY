import { useState } from 'react';

import { CardList } from '@components';
import { CATEGORY, SUB_CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';
import SubCategoryBar from '@pages/designList/components/SubCategoryBar/SubCategoryBar';

import {
  cardListWrapper,
  categoryContainer,
  categoryWrapper,
  designListPageLayout,
  subCategoryWrapper,
} from './DesignListPage.css';

import { CategoryType, SubCategoryType } from '@types';

export const designListPageNullData = null;

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

const DesignListPage = () => {
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

  const selectedCategories = {
    category: selectedCategory,
    subCategory: selectedSubCategory,
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
        <CardList item="design" itemData={designListPageData} hasModal selectedData={selectedCategories} />
      </div>
    </div>
  );
};

export default DesignListPage;
