import { useState } from 'react';

import * as styles from './StoreTab.css';

const tabs = ['디자인', '사이즈/맛', '상세정보'];

export const StoreTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.StoreTab}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tabButton} ${
            activeTab === index ? styles.activeTab : ''
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default StoreTab;
