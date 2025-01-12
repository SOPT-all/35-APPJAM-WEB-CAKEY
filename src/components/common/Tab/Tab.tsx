import { useState } from 'react';

import * as styles from './Tab.css';

interface TabProps {
  variant: 'viewMyPage' | 'store';
}
const tabs = {
  viewMyPage: ['스토어', '디자인'],
  store: ['디자인', '사이즈/맛', '상세정보'],
};

export const Tab = ({ variant }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabList = variant === 'viewMyPage' ? tabs.viewMyPage : tabs.store;
  return (
    <div className={styles.tabStyle}>
      {tabList.map((tab, index) => (
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

export default Tab;
