import { useState } from 'react';

import { DesignCard } from '@components';
import { CATEGORY } from '@constants';
import { StoreRankingButton } from '@pages/home/components';
import CategoryCard from '@pages/home/components/CategoryCard/CategoryCard';
import { MainKeyVisual } from 'src/assets/images';

import { IcHomeArrow } from '@svgs';

import {
  categoryWrapper,
  homePageLayout,
  mainSectionContainer,
  cakeSectionWrapper,
  subSectionContainer,
  subSectionWrapper,
  subTextStyle,
  likedCakeWrapper,
  likedCakeStyle,
  cakeTextStyle,
  mainContentContainer,
  mainTextWrapper,
  mainTextStyle,
  mainTextMiniStyle,
  mainContentWrapper,
  likedStoreWrapper,
} from './HomePage.css';

const storeRankingData = [
  {
    storeId: 1,
    storeName: '케이꾸야',
    storeLikesCount: 130,
    station: '홍대입구역',
  },
  {
    storeId: 2,
    storeName: '서연이네 스윗 마카롱',
    storeLikesCount: 12,
    station: '종로3가역',
  },
  {
    storeId: 3,
    storeName: '채연이랑 달콤달콤',
    storeLikesCount: 43,
    station: '동대문역사문화공원역',
  },
  {
    storeId: 4,
    storeName: '화랑이는 감딸기',
    storeLikesCount: 546,
    station: '화랑대역',
  },
  {
    storeId: 5,
    storeName: '지유네 케이크집',
    storeLikesCount: 65,
    station: '태릉입구역',
  },
];

const cakeRankingData = [
  {
    cakeId: 1,
    storeId: 1,
    imageUrl: '../public/example-img.png',
    storeName: '햄니케이크',
    cakeLikesCount: 444,
    station: '종로5가역',
    isLiked: true,
  },
  {
    cakeId: 2,
    storeId: 2,
    imageUrl: '../public/example-img.png',
    storeName: '햄니케이크',
    cakeLikesCount: 444,
    station: '종로5가역',
    isLiked: true,
  },
  {
    cakeId: 3,
    storeId: 3,
    imageUrl: '../public/example-img.png',
    storeName: '햄니케이크',
    cakeLikesCount: 444,
    station: '종로5가역',
    isLiked: false,
  },
];

const user = { userName: '박채연' };

const HomePage = () => {
  const [isLogin] = useState(true);

  return (
    <div className={homePageLayout}>
      <section className={mainSectionContainer} onClick={() => {}}>
        <img src={MainKeyVisual} />
        <div className={mainContentContainer}>
          <h1 className={mainTextStyle}>
            {isLogin ? `${user.userName} 님,` : '안녕하세요!'}
          </h1>

          <div className={mainContentWrapper}>
            <div className={mainTextWrapper}>
              <h1 className={mainTextStyle}>주문제작 케이크 찾으시나요?</h1>
              <p className={mainTextMiniStyle}>
                약속 장소와 가까운 스토어 둘러보기
              </p>
            </div>
            <IcHomeArrow width={36} height={36} />
          </div>
        </div>
      </section>

      <main className={subSectionContainer}>
        <section className={subSectionWrapper}>
          <h1 className={subTextStyle}>어떤 날을 위한 케이크인가요?</h1>
          <div className={categoryWrapper}>
            {CATEGORY.map((category) => (
                <CategoryCard category={category} />
            ))}
          </div>
        </section>

        <section className={subSectionWrapper}>
          <h1 className={subTextStyle}>인기 스토어</h1>
          <div className={likedStoreWrapper}>
            {storeRankingData.map((store, index) => {
              return index < 4 ? (
                <StoreRankingButton rank={index + 1} data={store} />
              ) : (
                <StoreRankingButton
                  rank={index + 1}
                  data={store}
                  hasBorder={false}
                />
              );
            })}
          </div>
        </section>

        <section className={cakeSectionWrapper}>
          <h1 className={cakeTextStyle}>인기 케이크</h1>
          <div className={likedCakeWrapper}>
            {cakeRankingData.map((cake, index) => (
              <div className={likedCakeStyle}>
                <DesignCard numberLabel={`${index + 1}`} designItem={cake} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
