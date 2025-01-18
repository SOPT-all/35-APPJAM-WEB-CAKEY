import { useState } from 'react';

import { CardList, Tab } from '@components';

import {
  cardListStyle,
  myListContainer,
  myListTitle,
  tabSticky,
  titleWrapper,
} from './MyList.css';

const MyList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  const likedStoreData = {
    storeCount: 3,
    stores: [
      {
        storeId: 1,
        storeName: '버터뭉1',
        station: '종로5가역',
        address: '서울 중구 동호로 385-2',
        storeLikesCount: 30,
        isLiked: true,
        images: [
          { imageId: 1, imageUrl: '../public/example-img.png' },
          { imageId: 2, imageUrl: '../public/example-img.png' },
          { imageId: 3, imageUrl: '../public/example-img.png' },
          { imageId: 4, imageUrl: '../public/example-img.png' },
        ],
      },
      {
        storeId: 2,
        storeName: '버터뭉2',
        station: '홍대입구역',
        address: '서울 마포구 동호로 385-2',
        storeLikesCount: 28,
        isLiked: true,
        images: [
          { imageId: 1, imageUrl: '../public/example-img.png' },
          { imageId: 2, imageUrl: '../public/example-img.png' },
          { imageId: 3, imageUrl: '../public/example-img.png' },
          { imageId: 4, imageUrl: '../public/example-img.png' },
        ],
      },
      {
        storeId: 3,
        storeName: '버터뭉3',
        station: '홍대입구역',
        address: '서울 마포구 구호로 385-2',
        storeLikesCount: 26,
        isLiked: true,
        images: [
          { imageId: 1, imageUrl: '../public/example-img.png' },
          { imageId: 2, imageUrl: '../public/example-img.png' },
          { imageId: 3, imageUrl: '../public/example-img.png' },
          { imageId: 4, imageUrl: '../public/example-img.png' },
        ],
      },
      {
        storeId: 4,
        storeName: '버터뭉4',
        station: '홍대입구역',
        address: '서울 마포구 구호로 385-2',
        storeLikesCount: 26,
        isLiked: true,
        images: [
          { imageId: 1, imageUrl: '../public/example-img.png' },
          { imageId: 2, imageUrl: '../public/example-img.png' },
          { imageId: 3, imageUrl: '../public/example-img.png' },
          { imageId: 4, imageUrl: '../public/example-img.png' },
        ],
      },
    ],
  };

  const likedDesignData = {
    cakeCount: 5,
    cakes: [
      {
        cakeId: 1,
        storeId: 1,
        storeName: '버터뭉1',
        station: '홍대입구역',
        isLiked: true,
        likeCount: 200,
        imageUrl: '../public/example-img.png',
      },
      {
        cakeId: 2,
        storeId: 2,
        storeName: '버터뭉2',
        station: '서강대입구역',
        isLiked: true,
        likeCount: 30,
        imageUrl: '../public/example-img.png',
      },
      {
        cakeId: 3,
        storeId: 1,
        storeName: '버터뭉3',
        station: '홍대입구역',
        isLiked: true,
        likeCount: 45,
        imageUrl: '../public/example-img.png',
      },
      {
        cakeId: 4,
        storeId: 1,
        storeName: '버터뭉4',
        station: '홍대입구역',
        isLiked: true,
        likeCount: 33,
        imageUrl: '../public/example-img.png',
      },
      {
        cakeId: 5,
        storeId: 1,
        storeName: '버터뭉5',
        station: '홍대입구역',
        isLiked: true,
        likeCount: 65,
        imageUrl: '../public/example-img.png',
      },
    ],
  };

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
          <CardList item={'likedStore'} data={likedStoreData} />
        ) : (
          <CardList item={'likedDesign'} data={likedDesignData} />
        )}
      </main>
      ;
    </div>
  );
};

export default MyList;
