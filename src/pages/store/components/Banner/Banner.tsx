import { IconButton } from '@components';
import {
  bannerContainer,
  locationStyle,
  stationText,
  line,
  storeInfoWrapper,
  storeInfoBox,
  storeAddress,
} from './Banner.css';
import { IcStoreLocation } from '@svgs';

const Banner = () => {
  const data = {
    storeId: 1,
    storeName: '버터뭉',
    address: '서울 중구 동호로 285-2 아이디어회관 301호 ',
    station: '홍대입구역',
    isLiked: true,
    imageUrl: '/example-img.png',
  };

  return (
    <main className={bannerContainer}>
      <div className={locationStyle}>
        <IcStoreLocation width={20} height={20} />
        <span className={stationText}>{data.station}</span>
        <div className={line} />
      </div>
      <div className={storeInfoWrapper}>
        <div className={storeInfoBox}>
          <h1>{data.storeName}</h1>
          <p className={storeAddress}>{data.address}</p>
        </div>
        <IconButton buttonType={'save28'} count={32} />
      </div>
    </main>
  );
};

export default Banner;
