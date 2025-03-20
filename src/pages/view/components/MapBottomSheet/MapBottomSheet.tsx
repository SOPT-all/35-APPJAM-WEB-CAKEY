import { useState } from 'react';

import { useFetchLikedStoreList } from '@apis/myPage/useFetchLikedStoreList';
import {
  useFetchLikedStoreDesign,
  useFetchStationDesign,
  useFetchStationStore,
} from '@apis/view';

import { BottomSheet, CardList, Tab } from '@components';
import { useFilteredCardList } from '@hooks';

import {
  sectionContainer,
  listContainer,
  tabWrapper,
  spacing,
} from './MapBottomSheet.css';

import { BottomSheetState } from '@types';

interface MapBottomSheetProps {
  selectedStation: string;
  isSaveActive: boolean;
  animateState: BottomSheetState;
  handleAnimateChange: (animate: BottomSheetState) => void;
  onSelectStore: (storeId: number) => void;
}

const MapBottomSheet = ({
  selectedStation,
  isSaveActive,
  animateState,
  handleAnimateChange,
  onSelectStore,
}: MapBottomSheetProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const { option, handleOptionSelect } = useFilteredCardList();

  const handleTab = (index: number) => {
    setActiveTab(index);
    handleOptionSelect('latest');
  };

  // 스토어 정보 리스트 조회
  const { data: stationStoreData, fetchNextPage: fetchStationStoreNext } =
    useFetchStationStore(
      option,
      selectedStation,
      !isSaveActive && (selectedStation === 'ALL' || activeTab === 0)
    );

  // 해당 역 디자인 조회
  const { data: stationDesignData, fetchNextPage: fetchStationDesignNext } =
    useFetchStationDesign(
      option,
      selectedStation,
      !isSaveActive && selectedStation !== 'ALL' && activeTab === 1
    );

  // 찜한 스토어 조회
  const { data: likedStoreData, fetchNextPage: fetchLikedStoreNext } =
    useFetchLikedStoreList(option, isSaveActive && activeTab === 0);

  // 찜한 스토어 디자인 조회
  const {
    data: likedStoreDesignData,
    fetchNextPage: fetchLikedStoreDesignNext,
  } = useFetchLikedStoreDesign(option, isSaveActive && activeTab === 1);

  return (
    <BottomSheet
      animateState={animateState}
      handleAnimateChange={handleAnimateChange}
    >
      {isSaveActive ? (
        <section className={sectionContainer}>
          <div className={tabWrapper}>
            <Tab
              tabType={'viewMyPage'}
              activeTab={activeTab}
              onTabChange={handleTab}
            />
          </div>
          <div className={listContainer}>
            {activeTab === 0 ? (
              <CardList
                item="likedStore"
                itemData={likedStoreData?.pages.flat()}
                option={option}
                handleOptionSelect={handleOptionSelect}
                fetchNextPage={fetchLikedStoreNext}
                onSelectStore={onSelectStore}
              />
            ) : (
              <CardList
                item="likedStoreDesign"
                itemData={likedStoreDesignData?.pages.flat()}
                option={option}
                handleOptionSelect={handleOptionSelect}
                fetchNextPage={fetchLikedStoreDesignNext}
                onSelectStore={onSelectStore}
              />
            )}
          </div>
        </section>
      ) : selectedStation === 'ALL' ? (
        <div className={listContainer}>
          <div className={spacing} />
          <CardList
            item="store"
            itemData={stationStoreData?.pages.flat()}
            option={option}
            handleOptionSelect={handleOptionSelect}
            fetchNextPage={fetchStationStoreNext}
            onSelectStore={onSelectStore}
          />
        </div>
      ) : (
        <section className={sectionContainer}>
          <div className={tabWrapper}>
            <Tab
              tabType={'viewMyPage'}
              activeTab={activeTab}
              onTabChange={handleTab}
            />
          </div>
          <div className={listContainer}>
            {activeTab === 0 ? (
              <CardList
                item="store"
                itemData={stationStoreData?.pages.flat()}
                option={option}
                handleOptionSelect={handleOptionSelect}
                fetchNextPage={fetchStationStoreNext}
                onSelectStore={onSelectStore}
              />
            ) : (
              <CardList
                item="design"
                itemData={stationDesignData?.pages.flat()}
                option={option}
                handleOptionSelect={handleOptionSelect}
                fetchNextPage={fetchStationDesignNext}
                onSelectStore={onSelectStore}
              />
            )}
          </div>
        </section>
      )}
    </BottomSheet>
  );
};

export default MapBottomSheet;
