import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const stateTab = location.state?.tap;

    if (stateTab === 'save') {
      setActiveTab(0);
    } else if (stateTab === 'like') {
      setActiveTab(1);
    }
  }, [location.state]);

  const { option, handleOptionSelect } = useFilteredCardList();

  const handleTab = (index: number) => {
    setActiveTab(index);
    handleOptionSelect('latest');
  };

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
