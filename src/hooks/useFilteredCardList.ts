import { startTransition, useState } from 'react';

import { useFetchDesignList } from '@apis/designList/useFetchDesignList';
import { useFetchLikedStoreList } from '@apis/myPage/useFetchLikedStoreList';

import {
  CategoryType,
  DesignCardListType,
  ItemType,
  OptionType,
  StoreCardListType,
  SubCategoryType,
} from '@types';

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
  const [data, setData] = useState<StoreCardListType | DesignCardListType>();

  const handleOptionSelect = (newOption: OptionType) => {
    startTransition(() => {
      setOption(newOption);
    });
  };

  // api 호출할 땐, item, option, categories, station 이용

  // 지하철역 가지고 api 부를 때 사용
  console.log(station);

  // 디자인 둘러보기 조회 api (둘러보기 페이지)
  const { data: DesignListData } = useFetchDesignList(
    option,
    categories?.category ?? 'BIRTH',
    categories?.subCategory ?? 'ALL',
    {
      enabled:
        item === 'design' &&
        (!!categories?.category || !!categories?.subCategory),
    }
  );

  // 찜한 스토어 조회 api (마이리스트 페이지, 지도 페이지)
  const { data: LikedStoreListData } = useFetchLikedStoreList(option, 0, 10, {
    enabled: item === 'likedStore',
  });

  if (item === 'design') {
    setData(DesignListData);
  }

  if (item === 'likedStore') {
    setData(LikedStoreListData);
  }

  return {
    item,
    option,
    handleOptionSelect,
    data,
  };
};

export default useFilteredCardList;
