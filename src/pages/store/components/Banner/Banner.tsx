import { IconButton } from '@components';
import {
  bannerContainer,
  locationStyle,
  line,
  storeInfoWrapper,
  storeInfoBox,
  storeAddress,
} from './Banner.css';

const Banner = () => {
  return (
    <main className={bannerContainer}>
      <div className={locationStyle}>
        <span>덕소역</span>
        <div className={line} />
      </div>
      <div className={storeInfoWrapper}>
        <div className={storeInfoBox}>
          <h1>버터뭉</h1>
          <p className={storeAddress}>
            서울 강남구 테헤란로4길 32 역삼동우정에쉐르1 666호 쉐르1 666호쉐르1
            666호쉐르1 666호쉐르1 666호
          </p>
        </div>
        <IconButton buttonType={'save28'} count={32} />
      </div>
    </main>
  );
};

export default Banner;
