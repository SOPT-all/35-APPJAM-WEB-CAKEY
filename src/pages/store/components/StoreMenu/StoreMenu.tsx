import SizeCardList from '../SizeCardList/SizeCardList';
import {
  sectionStyle,
  sectionBox,
  boxTitle,
  boxTitleSubText,
  tasteDescription,
} from './StoreMenu.css';

const StoreMenu = () => {
  return (
    <section className={sectionStyle}>
      <div className={sectionBox}>
        <h2 className={boxTitle}>
          사이즈
          <span className={boxTitleSubText}>
            *상세 사이즈는 가게마다 다를 수 있어요
          </span>
        </h2>
        <SizeCardList />
      </div>
      <div className={sectionBox}>
        <h2 className={boxTitle}>맛</h2>
        <div className={tasteDescription}>
          겉크림- 크림치즈크림 시트 - 가나슈시트 안크림 - 가나슈크림 or
          오레오생크림
        </div>
      </div>
    </section>
  );
};

export default StoreMenu;
