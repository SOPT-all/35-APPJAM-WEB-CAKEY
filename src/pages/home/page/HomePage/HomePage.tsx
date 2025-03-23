import { useFetchCakeRank } from '@apis/home';
import { useFetchStoreRank } from '@apis/home/useFetchStoreRank';

import { DesignCard, Footer } from '@components';
import { CATEGORY, MainKeyVisual } from '@constants';
import { useEasyNavigate } from '@hooks';
import { StoreRankingButton } from '@pages/home/components';
import CategoryCard from '@pages/home/components/CategoryCard/CategoryCard';
import { isLoggedIn } from '@utils';

import { IcArrowRight16, IcClickCta } from '@svgs';

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
  allButtonStyle,
  allButtonWrapper,
  subTextWrapper,
  mainImageStyle,
} from './HomePage.css';

const HomePage = () => {
  const isLogin = isLoggedIn();
  const { goViewPage, goDesignListPage } = useEasyNavigate();
  const { data: storeRankData } = useFetchStoreRank();
  const { data: cakeRankData } = useFetchCakeRank();
  const user = isLogin ? localStorage.getItem('userName') : null;

  const handleAllButtonClick = () => {
    goDesignListPage('BIRTH');
  };

  return (
    <div className={homePageLayout}>
      <section
        className={mainSectionContainer}
        onClick={() => {
          goViewPage();
        }}
      >
        <img src={MainKeyVisual} className={mainImageStyle} />
        <div className={mainContentContainer}>
          <div className={mainContentWrapper}>
            <div className={mainTextWrapper}>
              <h1 className={mainTextStyle}>
                {isLogin ? `${user} 님,` : '주문제작 케이크 찾으시나요?'}
              </h1>
              <p className={mainTextMiniStyle}>눌러서 지도 보기</p>
            </div>
            <IcClickCta width={87} height={40} />
          </div>
        </div>
      </section>

      <main className={subSectionContainer}>
        <section className={subSectionWrapper}>
          <div className={subTextWrapper} onClick={handleAllButtonClick}>
            <h1 className={subTextStyle}>어떤 날을 위한 케이크인가요?</h1>
            <div className={allButtonWrapper}>
              <button className={allButtonStyle}>전체보기</button>
              <IcArrowRight16 width={16} height={16} />
            </div>
          </div>
          <div className={categoryWrapper}>
            {CATEGORY.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>
        </section>

        <section className={subSectionWrapper}>
          <h1 className={subTextStyle}>인기 스토어</h1>
          <div className={likedStoreWrapper}>
            {storeRankData.map((store, index) => {
              return index < 4 ? (
                <StoreRankingButton
                  key={store.storeId}
                  rank={index + 1}
                  data={store}
                />
              ) : (
                <StoreRankingButton
                  key={store.storeId}
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
            {cakeRankData.map((cake, index) => (
              <div className={likedCakeStyle} key={cake.cakeId}>
                <DesignCard numberLabel={`${index + 1}`} designItem={cake} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
