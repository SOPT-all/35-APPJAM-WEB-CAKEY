import { IcMy, ImgLogo } from '@svgs';

import { container } from './Header.css';

interface HeaderProps {
  bgColor?: 'white' | 'yellow';
}

const Header = ({ bgColor = 'white' }: HeaderProps) => {
  return (
    <header className={container({ bgColor })}>
      <ImgLogo width={94} height={26} />
      <IcMy width={32} height={32} />
    </header>
  );
};

export default Header;
