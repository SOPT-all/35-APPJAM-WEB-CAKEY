import { useFetchStoreDetailSize } from '@apis/store';

import {
  listStyle,
  listBox,
  boxTitle,
  boxTitleSubText,
  tasteDescription,
} from './StoreMenu.css';
import SizeCardList from '../SizeCardList/SizeCardList';

interface StoreMenuProps {
  storeId: number;
}

const StoreMenu = ({ storeId }: StoreMenuProps) => {
  const { data: menuData } = useFetchStoreDetailSize(storeId);

  return (
    <ul className={listStyle}>
      <li className={listBox}>
        <h2 className={boxTitle}>
          사이즈
          <span className={boxTitleSubText}>
            *상세 사이즈는 가게마다 다를 수 있어요
          </span>
        </h2>
        <SizeCardList sizes={menuData.sizeDtoList} />
      </li>

      <li className={listBox}>
        <h2 className={boxTitle}>맛</h2>
        <p className={tasteDescription}>{menuData.taste}</p>
      </li>
    </ul>
  );
};

export default StoreMenu;
