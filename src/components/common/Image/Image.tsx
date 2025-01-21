import { HTMLAttributes } from 'react';

import {
  divStyle,
  iconButtonStyle,
  imageStyle,
  numberLabelStyle,
} from './Image.css';
import IconButton from '../IconButton/IconButton';

export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  variant?: 'square' | 'rounded';
  numberLabel?: string;
  hasIcon?: boolean;
  isActive?: boolean;
  itemId?: number;
}

const Image = ({
  src,
  variant = 'square',
  numberLabel = '',
  hasIcon = false,
  isActive,
  itemId, // storeId | cakeId를 받아서 IconButton으로 넘겨줍니다
}: ImageProps) => {
  return (
    <div className={divStyle}>
      {numberLabel && <div className={numberLabelStyle}>{numberLabel}</div>}
      <img src={src} className={imageStyle({ variant })} />
      {hasIcon && (
        <div className={iconButtonStyle}>
          <IconButton buttonType="like36" isActive={isActive} itemId={itemId} />
        </div>
      )}
    </div>
  );
};

export default Image;
