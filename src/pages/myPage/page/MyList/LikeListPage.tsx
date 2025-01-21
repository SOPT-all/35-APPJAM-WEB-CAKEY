import { useState } from 'react';

import { useFetchCakeLikesLatest } from '@apis/myPage/useFetchCakeLiskesLatest';

import { CardList, Tab } from '@components';
import useFilteredCardList from 'src/hooks/useFilteredCardList';

import {
  cardListStyle,
  myListContainer,
  myListTitle,
  tabSticky,
  titleWrapper,
} from './LikeListPage.css';

const LikeListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  const {
    data: likedStoreData,
    handleOptionSelect: likedStoreOptionChange,
    item: likedStoreItem,
  } = useFilteredCardList({
    item: 'likedStore',
  });

  // const {
  //   data: likedDesignData,
  //   handleOptionSelect: likedDesignOptionChange,
  //   item: likedDesignItem,
  // } = useFilteredCardList({
  //   item: 'likedDesign',
  // });

  const { data: cakeLikesLatestData } = useFetchCakeLikesLatest();

  return (
    <div className={myListContainer}>
      <section className={titleWrapper}>
        <h1 className={myListTitle}>찜 목록</h1>
      </section>
      <div className={tabSticky}>
        <Tab
          tabType={'viewMyPage'}
          activeTab={activeTab}
          onTabChange={handleTab}
        />
      </div>
      <main className={cardListStyle}>
        {activeTab === 0 ? (
          <CardList
            item={likedStoreItem}
            itemData={likedStoreData}
            handleOptionSelect={likedStoreOptionChange}
          />
        ) : (
          <CardList
            item={likedDesignItem}
            itemData={likedDesignData}
            handleOptionSelect={likedDesignOptionChange}
          />
        )}
      </main>
    </div>
  );
};

export default LikeListPage;
