import { useState } from 'react';

import * as styles from './MainTab.css';

const tabs = ['스토어', '디자인'];

export const MainTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.mainTab}>
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

export default MainTab;
