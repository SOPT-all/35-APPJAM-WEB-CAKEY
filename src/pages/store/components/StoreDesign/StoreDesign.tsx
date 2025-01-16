import { gridStyle } from './StoreDesign.css';

import { Image } from '@components';

const StoreDesign = () => {
  const designs = [
    // 추후 삭제 예정
    { cakeId: 1, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 2, cakeImageUrl: '/example-img.png', isLiked: false },
    { cakeId: 3, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 4, cakeImageUrl: '/example-img.png', isLiked: false },
    { cakeId: 5, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 6, cakeImageUrl: '/example-img.png', isLiked: false },
    { cakeId: 7, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 8, cakeImageUrl: '/example-img.png', isLiked: false },
    { cakeId: 9, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 10, cakeImageUrl: '/example-img.png', isLiked: false },
    { cakeId: 11, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 12, cakeImageUrl: '/example-img.png', isLiked: false },
  ];

  return (
    <div className={gridStyle}>
      {designs.map((design) => (
        <Image
          key={design.cakeId}
          src={design.cakeImageUrl}
          hasIcon={true}
          isActive={design.isLiked}
        />
      ))}
    </div>
  );
};

export default StoreDesign;
