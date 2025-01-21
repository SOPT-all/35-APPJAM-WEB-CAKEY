import { startTransition, useState } from 'react';

import { useFetchDesignList } from '@apis/designList/useFetchDesignList';

import { CategoryType, ItemType, OptionType, SubCategoryType } from '@types';

interface CategoriesType {
  category: CategoryType;
  subCategory: SubCategoryType;
}

interface useFilteredCardListProps {
  item: ItemType;
  categories?: CategoriesType;
  station?: string;
}

const useFilteredCardList = ({
  item,
  categories,
  station,
}: useFilteredCardListProps) => {
  const [option, setOption] = useState<OptionType>('latest');

  const handleOptionSelect = (newOption: OptionType) => {
    startTransition(() => {
      setOption(newOption);
    });
  };

  // api 호출할 땐, item, option, categories, station 이용

  // 지하철역 가지고 api 부를 때 사용
  console.log(station);

  // 디자인 둘러보기 조회 api (둘러보기 페이지)
  const { data } = useFetchDesignList(
    option,
    categories?.category ?? 'BIRTH',
    categories?.subCategory ?? 'ALL',
    {
      enabled:
        item === 'design' &&
        (!!categories?.category || !!categories?.subCategory),
    }
  );

  return {
    item,
    option,
    handleOptionSelect,
    data,
  };
};

export default useFilteredCardList;
