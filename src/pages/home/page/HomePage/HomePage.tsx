import { useState } from 'react';

import { CATEGORY, SUB_CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';
import SubCategoryBar from '@pages/designList/components/SubCategoryBar/SubCategoryBar';

import { CategoryType, SubCategoryType } from '@types';

const HomePage = () => {
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
    <div>
      <CategoryBar
        categories={CATEGORY}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <SubCategoryBar categories={SUB_CATEGORY} selectedSubCategory={selectedSubCategory} onSubCategoryChange={handleSubCategoryChange} />
    </div>
  );
};

export default HomePage;
