import { Image } from '@components';
import { sectionStyle } from './StoreDesign.css';

const StoreDesign = () => {
  const images = Array.from({ length: 16 }, (_, index) => ({
    src: `/example-img.png`,
    hasIcon: true,
  }));

  return (
    <section className={sectionStyle}>
      {images.map((image, index) => (
        <Image key={index} src={image.src} hasIcon={image.hasIcon} />
      ))}
    </section>
  );
};

export default StoreDesign;
