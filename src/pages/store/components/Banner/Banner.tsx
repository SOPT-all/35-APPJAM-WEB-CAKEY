import { IconButton } from '@components';

import { IcStoreLocation } from '@svgs';

import {
  bannerContainer,
  locationStyle,
  stationText,
  line,
  storeInfoWrapper,
  storeInfoBox,
  storeAddress,
} from './Banner.css';

interface StoreData {
  storeId: number;
  storeName: string;
  address: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
}

interface BannerProps {
  storeData: StoreData;
}

const Banner = ({ storeData }: BannerProps) => {
  return (
    <main className={bannerContainer}>
      <div className={locationStyle}>
        <IcStoreLocation width={20} height={20} />
        <span className={stationText}>{storeData.station}</span>
        <div className={line} />
      </div>

      <div className={storeInfoWrapper}>
        <div className={storeInfoBox}>
          <h1>{storeData.storeName}</h1>
          <p className={storeAddress}>{storeData.address}</p>
        </div>
        <IconButton
          buttonType={'save28'}
          isActive={storeData.isLiked}
          count={32}
        />
      </div>
    </main>
  );
};

export default Banner;
