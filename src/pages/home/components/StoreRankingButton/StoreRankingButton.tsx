import { Label } from '@components';
import { useEasyNavigate } from '@hooks';

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
  hasBorder?: boolean;
}

const StoreRankingButton = ({
  data,
  rank,
  hasBorder = true,
}: StoreRankingProps) => {
  const { storeId, storeName, storeLikesCount, station } = data;

  const { goStorePage } = useEasyNavigate();

  return (
    <button
      className={rankingContainer({ hasBorder })}
      onClick={() => goStorePage(storeId)}
    >
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
