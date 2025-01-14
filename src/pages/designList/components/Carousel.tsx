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
}

const Carousel = ({ designs }: CarouselProps) => {
  return (
    <div className={container}>
      {designs.map((design) => {
        return (
          <div key={design.cakeId} className={imageStyle}>
            <Image
              src={design.cakeImageUrl}
              hasIcon
              variant="rounded"
              isActive={design.isLiked}
            />
          </div>
        );
      })}
      <div className={moreButtonStyle}>
        <IcCircleArrowRight42 width="3.5rem" height="3.5rem" />
        <span className={moreTextStyle}>더보기</span>
      </div>
    </div>
  );
};

export default Carousel;
