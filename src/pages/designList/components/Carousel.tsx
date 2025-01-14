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
      <li className={moreButtonStyle}>
        <IcCircleArrowRight42 width="3.5rem" height="3.5rem" />
        <span className={moreTextStyle}>더보기</span>
      </li>
    </ul>
  );
};

export default Carousel;
