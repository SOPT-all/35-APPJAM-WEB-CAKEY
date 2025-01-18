import { useEffect, useRef, useState } from 'react';

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
  const subCategoryRef = useRef<HTMLUListElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<{
    category: CategoryType;
    subCategory: SubCategoryType;
  }>({
    category: 'BIRTH',
    subCategory: 'ALL',
  });

  useEffect(() => {
    if (subCategoryRef.current) {
      subCategoryRef.current.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [selectedCategories.category]);

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategories({
      category: category,
      subCategory: 'ALL',
    });
  };

  const handleSubCategoryChange = (category: SubCategoryType) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      subCategory: category,
    }));
  };

  const { item, handleOptionSelect, data } = useFilteredCardList({
    item: 'design',
    parameterType: selectedCategories,
  });

  return (
    <div className={designListPageLayout}>
      <div className={categoryContainer}>
        <div className={categoryWrapper}>
          <CategoryBar
            categories={CATEGORY}
            selectedCategory={selectedCategories.category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div className={subCategoryWrapper}>
          <SubCategoryBar
            categories={SUB_CATEGORY}
            selectedSubCategory={selectedCategories.subCategory}
            onSubCategoryChange={handleSubCategoryChange}
            ref={subCategoryRef}
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
