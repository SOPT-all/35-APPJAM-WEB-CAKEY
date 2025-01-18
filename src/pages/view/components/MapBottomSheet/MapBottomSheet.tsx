import { useState } from 'react';

import { BottomSheet, CardList, Tab } from '@components';
import { useFilteredCardList } from '@hooks';

import {
  sectionContainer,
  listContainer,
  tabWrapper,
} from './MapBottomSheet.css';

interface MapBottomSheetProps {
  selectedStation: string;
  isSaveActive: boolean;
}

const MapBottomSheet = ({
  selectedStation,
  isSaveActive,
}: MapBottomSheetProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const {
    item: store,
    handleOptionSelect: storeOptionSelect,
    data: storeData,
  } = useFilteredCardList({ item: 'store' });

  const {
    item: design,
    handleOptionSelect: designOptionSelect,
    data: designData,
  } = useFilteredCardList({ item: 'design' });

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <BottomSheet>
      {selectedStation === 'ALL' ? (
        <div className={listContainer}>
          <CardList
            item={store}
            handleOptionSelect={storeOptionSelect}
            itemData={storeData}
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

          {isSaveActive ? (
            <>
              {activeTab === 0 ? (
                <CardList
                  item={'likedStore'}
                  handleOptionSelect={storeOptionSelect}
                  itemData={storeData}
                />
              ) : (
                <CardList
                  item={'likedDesign'}
                  handleOptionSelect={designOptionSelect}
                  itemData={designData}
                />
              )}
            </>
          ) : (
            <div className={listContainer}>
              {activeTab === 0 ? (
                <CardList
                  item={store}
                  handleOptionSelect={storeOptionSelect}
                  itemData={storeData}
                />
              ) : (
                <CardList
                  item={design}
                  handleOptionSelect={designOptionSelect}
                  itemData={designData}
                />
              )}
            </div>
          )}
        </section>
      )}
    </BottomSheet>
  );
};

export default MapBottomSheet;
