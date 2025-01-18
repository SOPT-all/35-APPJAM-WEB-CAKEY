import { useState } from 'react';

import { CardList } from '@components';
import { CATEGORY, SUB_CATEGORY } from '@constants';
import CategoryBar from '@pages/designList/components/CategoryBar/CategoryBar';
import SubCategoryBar from '@pages/designList/components/SubCategoryBar/SubCategoryBar';
import useFilteredCardList from 'src/hooks/useFilteredCardList';

import {
  cardListWrapper,
  categoryContainer,
  categoryWrapper,
  designListPageLayout,
  subCategoryWrapper,
} from './DesignListPage.css';

import { CategoryType, SubCategoryType } from '@types';

const DesignListPage = () => {
  // const [selectedCategory, setSelectedCategory] =
  //   useState<CategoryType>('BIRTH');
  // const [selectedSubCategory, setSelectedSubCategory] =
  //   useState<SubCategoryType>('ALL');

  // const handleCategoryChange = (category: CategoryType) => {
  //   setSelectedCategories(category);
  // };

  // const handleSubCategoryChange = (category: SubCategoryType) => {
  //   setSelectedSubCategory(category);
  // };

  const [selectedCategories, setSelectedCategories] = useState<{
    category: CategoryType;
    subCategory: SubCategoryType;
  }>({
    category: 'BIRTH',
    subCategory: 'ALL',
  });

  const handleCategoriesChange = (
    key: 'category' | 'subCategory',
    value: string
  ) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // const selectedCategories = [selectedCategory, selectedSubCategory];

  const { item, handleOptionSelect, data } = useFilteredCardList({
    item: 'design',
    parameterType: selectedCategories,
  });

  // hook에 들어갈 내용
  // 필터링 관련된 상태와 코드
  // api 호출하는 코드

  // api 호출할 때 필요한 내용
  // store | design | likedStore | likedDesign -> 페이지에서 훅으로 넘겨주기
  // latest | popularity -> 훅 내부에서

  return (
    <div className={designListPageLayout}>
      <div className={categoryContainer}>
        <div className={categoryWrapper}>
          <CategoryBar
            categories={CATEGORY}
            selectedCategory={selectedCategories.category}
            onCategoryChange={handleCategoriesChange}
          />
        </div>
        <div className={subCategoryWrapper}>
          <SubCategoryBar
            categories={SUB_CATEGORY}
            selectedSubCategory={selectedCategories.subCategory}
            onSubCategoryChange={handleCategoriesChange}
          />
        </div>
      </div>

      <div className={cardListWrapper}>
        <CardList
          item={item}
          hasModal
          itemData={data}
          handleOptionSelect={handleOptionSelect}
        />
      </div>
    </div>
  );
};

export default DesignListPage;
