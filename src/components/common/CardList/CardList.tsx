import { useEffect } from 'react';

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
  DesignCardListType,
  DesignItemType,
  ItemType,
  OptionType,
  StoreCardListType,
  StoreType,
  SubCategoryType,
} from '@types';

interface CardListProps {
  item: ItemType;
  itemData?: StoreCardListType | DesignCardListType;
  option: OptionType
  handleOptionSelect: (option: OptionType) => void;
  hasModal?: boolean;
  selectedCategories?: {
    category: CategoryType;
    subCategory: SubCategoryType;
  };
}

const CardList = ({
  item,
  itemData,
  option,
  handleOptionSelect,
  hasModal,
  selectedCategories,
}: CardListProps) => {
  const isStoreCardListType = (
    data: DesignCardListType | StoreCardListType
  ): data is StoreCardListType => {
    return 'stores' in data && 'storeCount' in data;
  };

  const isDesignCardListType = (
    data: DesignCardListType | StoreCardListType
  ): data is DesignCardListType => {
    return 'cakes' in data && 'cakeCount' in data;
  };

  // 카테고리 변경될 때마다 filtering Button 최신순으로 변경
  useEffect(() => {
    handleOptionSelect('latest');
  }, [selectedCategories]);

  // itemData가 StoreCardListType인 경우 stores에 접근 가능
  const cardListData = itemData
    ? isStoreCardListType(itemData)
      ? itemData.stores // Store 데이터
      : isDesignCardListType(itemData)
        ? itemData.cakes // Design 데이터
        : []
    : []; // itemData가 null일 경우 빈 배열

  // itemData가 StoreCardListType인 경우 storeCount에 접근 가능
  const cardListCount = itemData
    ? isStoreCardListType(itemData)
      ? itemData.storeCount // Store 데이터 개수
      : isDesignCardListType(itemData)
        ? itemData.cakeCount // Design 데이터 개수
        : 0
    : 0;

  // 카드리스트 텍스트 상황에 따라 다르게
  const cardListCountText = {
    store: ` 개의 스토어`,
    design: ` 개의 디자인`,
    likedStore: `찜한 스토어 `,
    likedDesign: `찜한 디자인 `,
    likedStoreDesign: `찜한 스토어의 디자인`,
  };

  const cardListNullText = {
    store: `등록된 스토어가 아직 없어요`,
    design: `등록된 케이크가 아직 없어요`,
    likedStore: `찜한 스토어가 아직 없어요`,
    likedDesign: `찜한 디자인이 아직 없어요`,
    likedStoreDesign: `찜한 스토어의 디자인이 아직 없어요`,
  };

  return (
    <div className={cardListContainer}>
      {cardListData.length > 0 ? (
        <>
          <div className={cardListTextWrapper}>
            <div>
              {(item === 'store' || item === 'design') && (
                <span className={countNumberStyle}>{cardListCount}</span>
              )}

              <span className={countTextStyle}>{cardListCountText[item]}</span>

              {(item === 'likedStore' ||
                item === 'likedDesign' ||
                item === 'likedStoreDesign') && (
                <span className={countNumberStyle}>{cardListCount}</span>
              )}
            </div>

            <FilteringButton option={option} onOptionSelect={handleOptionSelect} />
          </div>

          {item === 'store' || item === 'likedStore' ? (
            <div className={storeCardListWrapper}>
              {(cardListData as StoreType[]).map((store) => (
                <StoreCard storeItem={store} key={store.storeId} />
              ))}
            </div>
          ) : (
            <div className={designCardListWrapper}>
              {(cardListData as DesignItemType[]).map((cake) => (
                <DesignCard
                  key={cake.cakeId}
                  designItem={cake}
                  hasModal={hasModal}
                  selectedCategories={selectedCategories}
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
