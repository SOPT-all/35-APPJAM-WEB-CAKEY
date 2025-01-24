import { useSmoothScrollTop } from '@hooks';

import { IcTop } from '@svgs';

import { buttonStyle } from './TopButton.css';

const TopButton = () => {
  return (
    <button className={buttonStyle} onClick={useSmoothScrollTop}>
      <IcTop width={60} height={60} />
    </button>
  );
};

export default TopButton;
