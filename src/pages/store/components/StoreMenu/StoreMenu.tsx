import { useState } from 'react';

import SizeCardList from '../SizeCardList/SizeCardList';
import {
  sectionStyle,
  sectionBox,
  boxTitle,
  boxTitleSubText,
  tasteDescription,
} from './StoreMenu.css';

const StoreMenu = () => {
  const [menuData] = useState({
    sizes: [
      { sizeName: '미니', price: 10000 },
      { sizeName: '1호', price: 20000 },
    ],
    taste: '겉크림 - 크림치즈크림',
  });

  return (
    <section className={sectionStyle}>
      <div className={sectionBox}>
        <h2 className={boxTitle}>
          사이즈
          <span className={boxTitleSubText}>
            *상세 사이즈는 가게마다 다를 수 있어요
          </span>
        </h2>
        <SizeCardList sizes={menuData.sizes} />
      </div>
      
      <div className={sectionBox}>
        <h2 className={boxTitle}>맛</h2>
        <div className={tasteDescription}>{menuData.taste}</div>
      </div>
    </section>
  );
};

export default StoreMenu;
