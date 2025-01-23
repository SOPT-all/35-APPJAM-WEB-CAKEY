import { IcFooterLogo } from '@svgs';

import { footerInfoText, footerInfoTextWrapper, footerLayout, footerSubText, footerSubTextWrapper, footerSubWrapper } from './Footer.css';

const Footer = () => {
  return (
    <footer className={footerLayout}>
      <section className={footerInfoTextWrapper}>
        <span className={footerInfoText}>대표 | 노민지</span>
        <span className={footerInfoText}>
          이메일 | team.cakey.official@gmail.com
        </span>
      </section>

      <section className={footerSubWrapper}>
        <IcFooterLogo width={84} height={18} />
        <div className={footerSubTextWrapper}>
          <span className={footerSubText}>개인정보처리방침</span>
          <span className={footerSubText}>이용약관</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
