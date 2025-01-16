import { useState } from 'react';

import { Tab } from '@components';

import { myListContainer, myListTitle } from './MyList.css';

const MyList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={myListContainer}>
      <h1 className={myListTitle}>찜 목록</h1>
      <Tab
        tabType={'viewMyPage'}
        activeTab={activeTab}
        onTabChange={handleTab}
      />
      <div>{activeTab === 0 ? '스토어 찜 목록' : '디자인 찜 목록'}</div>
    </div>
  );
};

export default MyList;
