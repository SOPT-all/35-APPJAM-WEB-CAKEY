import { container } from './Header.css';
import { IcMy, ImgLogo } from '@svgs';

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
