import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

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
  itemData: StoreCardListType[] | DesignCardListType[] | undefined;
  handleOptionSelect: (option: OptionType) => void;
  hasModal?: boolean;
  selectedCategories?: {
    category: CategoryType;
    subCategory: SubCategoryType;
  };
  fetchNextPage: () => void;
}

const CardList = ({
  item,
  itemData,
  handleOptionSelect,
  hasModal,
  selectedCategories,
  fetchNextPage,
}: CardListProps) => {
  const { ref, inView } = useInView();

  // 데이터를 조건에 따라 바로 분기 처리
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

  const cardListData = itemData
    ?.map((data) => {
      if (isStoreCardListType(data)) {
        return data.stores;
      } else if (isDesignCardListType(data)) {
        return data.cakes;
      }
      return [];
    })
    .flat();

  const cardListCount = itemData?.reduce(
    (count, data) =>
      count + (isStoreCardListType(data) ? data.storeCount : data.cakeCount),
    0
  );

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

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div className={cardListContainer}>
      {cardListData && cardListData.length > 0 ? (
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

            <FilteringButton onOptionSelect={handleOptionSelect} />
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
      <div ref={ref} style={{ width: '100%', height: '3rem' }} />
    </div>
  );
};

export default CardList;
