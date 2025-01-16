import { useState } from 'react';

import {
  cardListContainer,
  cardListNullTextStyle,
  cardListTextWrapper,
  countNumberStyle,
  countTextStyle,
  designCardListWrapper,
  storeCardListWrapper,
} from './CardList.css';
import DesignCard from '../DesignCard/DesignCard';
import FilteringButton from '../FilteringButton/FilteringButton';
import StoreCard from '../StoreCard/StoreCard';

import {
  CategoryType,
  DesignItemType,
  StoreType,
  SubCategoryType,
} from '@types';

interface StoreCardListType {
  storeCount: number;
  stores: StoreType[];
}

interface DesignCardListType {
  cakeCount: number;
  cakes: DesignItemType[];
}

interface SelectedCategoryDataType {
  category: CategoryType;
  subCategory: SubCategoryType;
}

interface CardListProps {
  item: 'store' | 'design' | 'likedStore' | 'likedDesign';
  itemData: StoreCardListType | DesignCardListType | null;
  hasModal?: boolean;
  selectedData?: string | SelectedCategoryDataType;
}

const CardList = ({
  item,
  itemData,
  hasModal = false,
  selectedData,
}: CardListProps) => {
  const [, setOption] = useState(''); //option은 나중에 데이터 불러올 때 사용될 예정

  // filtering 버튼 관련한 로직 = onOptionSelect에 들어갈!
  const handleOptionSelect = (option: string) => {
    setOption(option);
  };

  const isStoreItem = item === 'store' || item === 'likedStore';

  // 데이터가 없는 경우를 처리
  const cardListData = itemData
    ? isStoreItem
      ? (itemData as StoreCardListType).stores
      : (itemData as DesignCardListType).cakes
    : []; // 데이터가 없으면 빈 배열로 처리

  const cardListCount = itemData
    ? isStoreItem
      ? (itemData as StoreCardListType).storeCount
      : (itemData as DesignCardListType).cakeCount
    : 0; // 데이터가 없으면 0으로 처리

  // 카드리스트 텍스트 상황에 따라 다르게
  const cardListCountText = {
    store: ` 개의 스토어`,
    design: ` 개의 디자인`,
    likedStore: `찜한 스토어 `,
    likedDesign: `찜한 스토어의 디자인 `,
  };

  const cardListNullText = {
    store: `등록된 스토어가 아직 없어요`,
    design: `등록된 케이크가 아직 없어요`,
    likedStore: `찜한 스토어가 아직 없어요`,
    likedDesign: `찜한 디자인이 아직 없어요`,
  };

  // 지하철 역, 혹은 카테고리 정보 > 추후에 api 요청될 때 사용될 예정
  console.log(selectedData);

  return (
    <div className={cardListContainer}>
      {itemData ? (
        <>
          <div className={cardListTextWrapper}>
            <div>
              {(item === 'store' || item === 'design') && (
                <span className={countNumberStyle}>{cardListCount}</span>
              )}

              <span className={countTextStyle}>{cardListCountText[item]}</span>

              {(item === 'likedStore' || item === 'likedDesign') && (
                <span className={countNumberStyle}>{cardListCount}</span>
              )}
            </div>

            <FilteringButton onOptionSelect={handleOptionSelect} />
          </div>

          {isStoreItem ? (
            <div className={storeCardListWrapper}>
              {(cardListData as StoreType[]).map((store) => (
                <StoreCard storeItem={store} />
              ))}
            </div>
          ) : (
            <div className={designCardListWrapper}>
              {(cardListData as DesignItemType[]).map((cake) => (
                <DesignCard
                  designItem={cake}
                  designId={cake.cakeId}
                  hasModal={hasModal}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <span className={cardListNullTextStyle}>{cardListNullText[item]}</span>
      )}
    </div>
  );
};

export default CardList;
