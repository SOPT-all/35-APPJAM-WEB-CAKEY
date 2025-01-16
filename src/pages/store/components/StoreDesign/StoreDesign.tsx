import { Image } from '@components';
import { sectionStyle } from './StoreDesign.css';

const StoreDesign = () => {
  const designs = [
    // 추후 삭제 예정
    { cakeId: 1, cakeImageUrl: '/example-img.png', isLiked: true },
    { cakeId: 2, cakeImageUrl: '/example-img.png', isLiked: false },
  ];

  return (
    <section className={sectionStyle}>
      {designs.map((design) => (
        <Image
          key={design.cakeId}
          src={design.cakeImageUrl}
          hasIcon={true}
          isActive={design.isLiked}
        />
      ))}
    </section>
  );
};

export default StoreDesign;
