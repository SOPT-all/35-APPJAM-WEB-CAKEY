import { useState } from 'react';

import {
  listStyle,
  listBox,
  boxTitle,
  boxTitleSubText,
  tasteDescription,
} from './StoreMenu.css';
import SizeCardList from '../SizeCardList/SizeCardList';

const StoreMenu = () => {
  const [menuData] = useState({
    sizes: [
      { sizeName: '미니', price: 10000 },
      { sizeName: '1호', price: 20000 },
    ],
    taste: '겉크림 - 크림치즈크림',
  });

  return (
    <ul className={listStyle}>
      <li className={listBox}>
        <h2 className={boxTitle}>
          사이즈
          <span className={boxTitleSubText}>
            *상세 사이즈는 가게마다 다를 수 있어요
          </span>
        </h2>
        <SizeCardList sizes={menuData.sizes} />
      </li>

      <li className={listBox}>
        <h2 className={boxTitle}>맛</h2>
        <p className={tasteDescription}>{menuData.taste}</p>
      </li>
    </ul>
  );
};

export default StoreMenu;
