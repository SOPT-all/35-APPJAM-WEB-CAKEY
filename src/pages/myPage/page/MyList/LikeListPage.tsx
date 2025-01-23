import { useState } from 'react';

import { useFetchLikedCakeList, useFetchLikedStoreList } from '@apis/myPage';

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

  const { option, handleOptionSelect } = useFilteredCardList();

  const isStoreListEnabled = activeTab === 0;
  const isCakeListEnabled = activeTab === 1;

  // 찜한 스토어 조회 API
  const { data: LikedStoreListData, fetchNextPage: fetchNextStorePage } =
    useFetchLikedStoreList(option, isStoreListEnabled);

  // 찜한 케이크(디자인) 조회 API
  const { data: LikedCakeListData, fetchNextPage: fetchNextCakePage } =
    useFetchLikedCakeList(option, isCakeListEnabled);

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
            item="likedStore"
            itemData={LikedStoreListData?.pages.flat()}
            option={option}
            handleOptionSelect={handleOptionSelect}
            fetchNextPage={fetchNextStorePage}
          />
        ) : (
          <CardList
            item="likedDesign"
            itemData={LikedCakeListData?.pages.flat()}
            option={option}
            handleOptionSelect={handleOptionSelect}
            fetchNextPage={fetchNextCakePage}
          />
        )}
      </main>
    </div>
  );
};

export default LikeListPage;
