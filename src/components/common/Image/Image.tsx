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
  width: string;
  height?: string;
  variant?: 'square' | 'rounded';
  numberLabel?: string;
  hasIcon?: boolean;
}

const Image = ({
  src,
  width,
  height = width,
  variant = 'square',
  numberLabel = '',
  hasIcon = false,
}: ImageProps) => {
  return (
    <div className={divStyle} style={{ width, height }}>
      {numberLabel && <div className={numberLabelStyle}>{numberLabel}</div>}
      <img
        src={src}
        className={imageStyle[variant]}
        style={{ width, height }}
      />
      {hasIcon && (
        <div className={iconButtonStyle}>
          <IconButton buttonType="like" onMap={false} isActive />
        </div>
      )}
    </div>
  );
};

export default Image;
