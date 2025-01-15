import { useState } from 'react';

import { CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';

import { CategoryType } from '@types';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>('BIRTH');

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);
  return (
    <div>
      <CategoryBar
        categories={CATEGORY}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
};

export default HomePage;
