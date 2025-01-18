import { useEffect, useState } from 'react';

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
  parameterType?: string | CategoriesType;
}

const useFilteredCardList = ({
  item,
  parameterType,
}: useFilteredCardListProps) => {
  const [option, setOption] = useState<OptionType>('latest');
  const [data, setData] = useState<StoreCardListType | DesignCardListType>({
    cakeCount: 0,
    cakes: [],
  });

  const handleOptionSelect = (newOption: OptionType) => {
    setOption(newOption);
  };

  // api 호출할 땐, item, option, parameterType을 이용
  console.log(option);
  console.log(parameterType);

  // api 데이터 불러오는 코드가 들어와야 함
  // 지금은 일단 mockData로 대체
  useEffect(() => {
    if (item === 'store') {
      const storeCardListData = {
        storeCount: 122,
        stores: [
          {
            storeId: 1,
            storeName: '버터뭉1',
            station: '종로5가역',
            address: '서울 중구 동호로 385-2',
            storeLikesCount: 30,
            isLiked: false,
            images: [
              {
                imageId: 1,
                imageUrl: 'https://example.com/image1.jpg',
              },
              {
                imageId: 2,
                imageUrl: 'https://example.com/image2.jpg',
              },
              {
                imageId: 3,
                imageUrl: 'https://example.com/image3.jpg',
              },
              {
                imageId: 4,
                imageUrl: 'https://example.com/image4.jpg',
              },
            ],
          },
          {
            storeId: 2,
            storeName: '버터뭉2',
            station: '홍대입구역',
            address: '서울 마포구 동호로 385-2',
            storeLikesCount: 28,
            isLiked: true,
            images: [
              {
                imageId: 5,
                imageUrl: 'https://example.com/image1.jpg',
              },
              {
                imageId: 6,
                imageUrl: 'https://example.com/image2.jpg',
              },
              {
                imageId: 7,
                imageUrl: 'https://example.com/image3.jpg',
              },
              {
                imageId: 8,
                imageUrl: 'https://example.com/image4.jpg',
              },
            ],
          },
          {
            storeId: 3,
            storeName: '버터뭉3',
            station: '홍대입구역',
            address: '서울 마포구 구호로 385-2',
            storeLikesCount: 26,
            isLiked: false,
            images: [
              {
                imageId: 9,
                imageUrl: 'https://example.com/image1.jpg',
              },
              {
                imageId: 10,
                imageUrl: 'https://example.com/image2.jpg',
              },
              {
                imageId: 11,
                imageUrl: 'https://example.com/image3.jpg',
              },
              {
                imageId: 12,
                imageUrl: 'https://example.com/image4.jpg',
              },
            ],
          },
        ],
      };
      setData(storeCardListData);
    } else if (item === 'design') {
      const designCardListData = {
        cakeCount: 100,
        cakes: [
          {
            cakeId: 1,
            storeId: 1,
            storeName: '버터뭉',
            station: '홍대입구역',
            isLiked: false,
            cakeLikesCount: 200,
            imageUrl: '../public/example-img.png',
          },
          {
            cakeId: 2,
            storeId: 2,
            storeName: '버터뭉2',
            station: '서강대입구역',
            isLiked: true,
            cakeLikesCount: 30,
            imageUrl: '../public/example-img.png',
          },
          {
            cakeId: 3,
            storeId: 1,
            storeName: '버터뭉',
            station: '홍대입구역',
            isLiked: false,
            cakeLikesCount: 200,
            imageUrl: '../public/example-img.png',
          },
        ],
      };
      setData(designCardListData);
    }
  }, [item, parameterType]);

  return {
    item,
    option,
    handleOptionSelect,
    data,
  };
};

export default useFilteredCardList;
