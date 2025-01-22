import { startTransition, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useFetchDesignList } from '@apis/designList/useFetchDesignList';

import { CardList } from '@components';
import { CATEGORY, SUB_CATEGORY } from '@constants';
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

  const handleCategoryChange = (category: CategoryType) => {
    startTransition(() => {
      setSelectedCategories({
        category: category,
        subCategory: 'ALL',
      });
    });
  };

  const handleSubCategoryChange = (category: SubCategoryType) => {
    startTransition(() => {
      setSelectedCategories((prevState) => ({
        ...prevState,
        subCategory: category,
      }));
    });
  };

  const { option, handleOptionSelect } = useFilteredCardList();

  // 디자인 둘러보기 조회 api
  const { data: DesignListData } = useFetchDesignList(
    option,
    selectedCategories.category ?? 'BIRTH',
    selectedCategories.subCategory ?? 'ALL'
  );

  return (
    <>
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
            item="design"
            itemData={DesignListData}
            option={option}
            handleOptionSelect={handleOptionSelect}
            hasModal
            selectedCategories={selectedCategories}
          />
        </div>
      </div>
    </>
  );
};

export default DesignListPage;
