import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useFetchDesignList } from '@apis/designList/useFetchDesignList';

import { CardList } from '@components';
import { CATEGORY, END_POINT, SUB_CATEGORY } from '@constants';
import { useFilteredCardList } from '@hooks';
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

const DesignListPage = () => {
  const location = useLocation();
  const currentCategory = location.state?.category ?? 'BIRTH';

  const subCategoryRef = useRef<HTMLUListElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<{
    category: CategoryType;
    subCategory: SubCategoryType;
  }>({
    category: currentCategory,
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

  const { data: designListData } = useFetchDesignList(
    selectedCategories.category,
    selectedCategories.subCategory
  );
  console.log(designListData);
  console.log(selectedCategories.category, selectedCategories.subCategory);
  // console.log(
  //   END_POINT.FETCH_DESIGN_LIST(
  //     selectedCategories.category,
  //     selectedCategories.subCategory
  //   )
  // );

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
