import { Image } from '@components';

import { gridStyle } from './StoreDesign.css';

interface DesignData {
  cakeId: number;
  cakeImageUrl: string;
  isLiked: boolean;
}

interface StoreDesignProps {
  designData: DesignData[];
}

const StoreDesign = ({ designData = [] }: StoreDesignProps) => {
  return (
    <div className={gridStyle}>
      {designData.map((design) => (
        <Image
          key={design.cakeId}
          src={design.cakeImageUrl}
          hasIcon
          isActive={design.isLiked}
        />
      ))}
    </div>
  );
};

export default StoreDesign;
