import { Image } from '@components';

import { IcCircleArrowRight42 } from '@svgs';

import {
  container,
  imageStyle,
  moreButtonStyle,
  moreTextStyle,
} from './Carousel.css';

interface DesignCardDetailType {
  cakeId: number;
  cakeImageUrl: string;
  isLiked: boolean;
}

interface CarouselProps {
  designs: DesignCardDetailType[];
  storeId: number;
}

const Carousel = ({ designs, storeId }: CarouselProps) => {
  const handleButtonClick = () => {
    console.log(storeId);
  };

  return (
    <ul className={container}>
      {designs.map((design) => {
        return (
          <li key={design.cakeId} className={imageStyle}>
            <Image
              src={design.cakeImageUrl}
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
