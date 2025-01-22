import { Image } from '@components';
import { useEasyNavigate } from '@hooks';

import { IcCircleArrowRight42 } from '@svgs';

import {
  container,
  imageStyle,
  moreButtonStyle,
  moreTextStyle,
} from './Carousel.css';

import { DesignDetailType } from '@types';

interface CarouselProps {
  designs: DesignDetailType[];
  storeId: number;
}

const Carousel = ({ designs, storeId }: CarouselProps) => {
  const { goStorePage } = useEasyNavigate();

  const handleButtonClick = () => {
    goStorePage(storeId);
  };

  return (
    <ul className={container}>
      {designs.map((design) => {
        return (
          <li key={design.cakeId} className={imageStyle}>
            <Image
              src={design.imageUrl}
              hasIcon
              variant="rounded"
              isActive={design.isLiked}
            />
          </li>
        );
      })}
      <li className={moreButtonStyle} onClick={handleButtonClick}>
        <IcCircleArrowRight42 width={35} height={35} />
        <span className={moreTextStyle}>더보기</span>
      </li>
    </ul>
  );
};

export default Carousel;
