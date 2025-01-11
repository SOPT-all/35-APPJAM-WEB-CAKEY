import { IcMy, ImgLogo } from '@svgs';
import * as styles from './Header.css';

interface HeaderProps {
  bgColor?: 'white' | 'mainBlue';
}

const Header = ({ bgColor }: HeaderProps) => {
  return (
    <header className={styles.container({ bgColor })}>
      <ImgLogo width={90} height={22} />
      <IcMy width={32} height={32} />
    </header>
  );
};

export default Header;
