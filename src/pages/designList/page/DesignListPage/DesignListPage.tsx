import { startTransition, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

  // console.log(selectedCategories);

  const { item, handleOptionSelect, data } = useFilteredCardList({
    item: 'design',
    categories: selectedCategories,
  });

  // const { item, handleOptionSelect } = useFilteredCardList({
  //   item: 'design',
  //   categories: selectedCategories,
  // });

  // const { data: designData } = useFetchDesignList(
  //   'latest',
  //   selectedCategories.category,
  //   selectedCategories.subCategory,
  //   {
  //     enabled:
  //       item === 'design' &&
  //       (!!selectedCategories.category || !!selectedCategories.subCategory),
  //   }
  // );

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
