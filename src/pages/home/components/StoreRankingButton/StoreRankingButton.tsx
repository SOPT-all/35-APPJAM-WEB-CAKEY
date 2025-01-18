import { useNavigate } from 'react-router-dom';

import { Label } from '@components';

import { IcArrowRight20 } from '@svgs';

import {
  isLiked,
  labelStyle,
  rankingContainer,
  rankingLeftBox,
  rankingRightBox,
  rankingWrapper,
  storeNameText,
} from './StoreRankingButton.css';

interface StoreRankingType {
  storeId: number;
  storeName: string;
  storeLikesCount: number;
  station: string;
}

interface StoreRankingProps {
  data: StoreRankingType;
  rank: number;
}

const StoreRankingButton = ({ data, rank }: StoreRankingProps) => {
  const { storeId, storeName, storeLikesCount, station } = data;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/store/${storeId}`);
  };

  return (
    <button className={rankingContainer} onClick={handleButtonClick}>
      <div className={rankingWrapper}>
        <div className={labelStyle}>
          <Label text={`${rank}`} />
        </div>
        <div className={rankingLeftBox}>
          <h3 className={storeNameText}>{storeName}</h3>
          <p className={isLiked}>{storeLikesCount}</p>
        </div>
      </div>
      <div className={rankingRightBox}>
        <Label text={station} />
        <IcArrowRight20 width={20} height={20} />
      </div>
    </button>
  );
};

export default StoreRankingButton;