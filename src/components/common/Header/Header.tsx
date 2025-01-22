import { useEasyNavigate } from '@hooks';

import { IcMy, ImgLogo } from '@svgs';

import { container } from './Header.css';

interface HeaderProps {
  bgColor?: 'white' | 'yellow';
}

const Header = ({ bgColor = 'white' }: HeaderProps) => {
  const { goHomePage, goMyPage } = useEasyNavigate();
  return (
    <header className={container({ bgColor })}>
      <ImgLogo width={94} height={26} onClick={goHomePage} cursor="pointer" />
      <IcMy width={32} height={32} onClick={goMyPage} cursor="pointer" />
    </header>
  );
};

export default Header;
