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

import { DesignItemType, StoreType } from '@types';

interface StoreCardListType {
  storeCount: number;
  stores: StoreType[];
}

interface DesignCardListType {
  cakeCount: number;
  cakes: DesignItemType[];
}

interface CardListProps {
  item: 'store' | 'design' | 'likedStore' | 'likedDesign';
  data?: StoreCardListType | DesignCardListType;
}

const CardList = ({ item, data }: CardListProps) => {
  const [, setOption] = useState(''); //option은 나중에 데이터 불러올 때 사용될 예정
  const [cardListData, setCardListData] = useState<
    StoreType[] | DesignItemType[]
  >();
  const [cardListCount, setCardListCount] = useState<number>();

  // filtering 버튼 관련한 로직 = onOptionSelect에 들어갈!
  const handleOptionSelect = (option: string) => {
    setOption(option);
  };

  const isStoreItem = item === 'store' || item === 'likedStore';

  if (data) {
    // 데이터를 조건에 따라 바로 분기 처리

    const filteredCardListData = isStoreItem
      ? (data as StoreCardListType).stores
      : (data as DesignCardListType).cakes;
    setCardListData(filteredCardListData);

    const filteredCardListCount = isStoreItem
      ? (data as StoreCardListType).storeCount
      : (data as DesignCardListType).cakeCount;
    setCardListCount(filteredCardListCount);
  }

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

  return (
    <div className={cardListContainer}>
      {cardListData ? (
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
                <DesignCard designItem={cake} />
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
