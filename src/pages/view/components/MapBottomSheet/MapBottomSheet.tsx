import { useState } from 'react';

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
} from './MapBottomSheet.css';

import { BottomSheetState, OptionType } from '@types';
import { useFetchLikedStoreList } from '@apis/myPage/useFetchLikedStoreList';

interface MapBottomSheetProps {
  selectedStation: string;
  isSaveActive: boolean;
  animateState: BottomSheetState;
  handleAnimateChange: (animate: BottomSheetState) => void;
}

interface ListProps {
  option: OptionType;
  handleOptionSelect: (option: OptionType) => void;
  selectedStation: string;
}

const StationStoreList = ({
  option,
  handleOptionSelect,
  selectedStation,
}: ListProps) => {
  const { data: stationStoreData, fetchNextPage } = useFetchStationStore(
    option,
    selectedStation
  );

  return (
    <CardList
      item="store"
      itemData={stationStoreData?.pages.flat()}
      option={option}
      handleOptionSelect={handleOptionSelect}
      fetchNextPage={fetchNextPage}
    />
  );
};

const StationDesignList = ({
  option,
  handleOptionSelect,
  selectedStation,
}: ListProps) => {
  const { data: stationDesignData, fetchNextPage } = useFetchStationDesign(
    option,
    selectedStation
  );

  return (
    <CardList
      item="design"
      itemData={stationDesignData?.pages.flat()}
      option={option}
      handleOptionSelect={handleOptionSelect}
      fetchNextPage={fetchNextPage}
    />
  );
};

const LikedStoreList = ({ option, handleOptionSelect }: ListProps) => {
  const { data: likedStoreData, fetchNextPage } =
    useFetchLikedStoreList(option);

  return (
    <CardList
      item="likedStore"
      itemData={likedStoreData?.pages.flat()}
      option={option}
      handleOptionSelect={handleOptionSelect}
      fetchNextPage={fetchNextPage}
    />
  );
};

const LikedStoreDesignList = ({ option, handleOptionSelect }: ListProps) => {
  const { data: likedStoreDesignData, fetchNextPage } =
    useFetchLikedStoreDesign(option);

  return (
    <CardList
      item="likedStoreDesign"
      itemData={likedStoreDesignData?.pages.flat()}
      option={option}
      handleOptionSelect={handleOptionSelect}
      fetchNextPage={fetchNextPage}
    />
  );
};

const MapBottomSheet = ({
  selectedStation,
  isSaveActive,
  animateState,
  handleAnimateChange,
}: MapBottomSheetProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const { option, handleOptionSelect } = useFilteredCardList();

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

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
              <>
                <LikedStoreList
                  option={option}
                  handleOptionSelect={handleOptionSelect}
                  selectedStation={selectedStation}
                />
              </>
            ) : (
              <LikedStoreDesignList
                option={option}
                handleOptionSelect={handleOptionSelect}
                selectedStation={selectedStation}
              />
            )}
          </div>
        </section>
      ) : selectedStation === 'ALL' ? (
        <div className={listContainer}>
          <StationStoreList
            option={option}
            handleOptionSelect={handleOptionSelect}
            selectedStation={selectedStation}
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
              <StationStoreList
                option={option}
                handleOptionSelect={handleOptionSelect}
                selectedStation={selectedStation}
              />
            ) : (
              <StationDesignList
                option={option}
                handleOptionSelect={handleOptionSelect}
                selectedStation={selectedStation}
              />
            )}
          </div>
        </section>
      )}
    </BottomSheet>
  );
};

export default MapBottomSheet;
