import { DesignCard } from '@components';
import { CATEGORY } from '@constants';
import CategoryCard from '@pages/home/components/CategoryCard/CategoryCard';

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
} from './HomePage.css';

const cakes = [
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

const HomePage = () => {
  return (
    <div className={homePageLayout}>
      <section className={mainSectionContainer}>메인 이미지</section>

      <section className={subSectionContainer}>
        <section className={subSectionWrapper}>
          <h1 className={subTextStyle}>어떤 날을 위한 케이크인가요?</h1>
          <div className={categoryWrapper}>
            {CATEGORY.map((category) => (
              <>
                <CategoryCard category={category} />
              </>
            ))}
          </div>
        </section>

        <section className={subSectionWrapper}>
          <h1 className={subTextStyle}>인기 스토어</h1>
          <div>랭킹</div>
        </section>

        <section className={cakeSectionWrapper}>
          <h1 className={cakeTextStyle}>인기 케이크</h1>
          <div className={likedCakeWrapper}>
            {cakes.map((cake, index) => (
              <div className={likedCakeStyle}>
                <DesignCard numberLabel={`${index + 1}`} designItem={cake} />
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
