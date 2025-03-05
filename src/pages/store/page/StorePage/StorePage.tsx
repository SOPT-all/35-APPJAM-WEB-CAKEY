import { startTransition, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useFetchStoreInfo } from '@apis/store';

import { Tab } from '@components';
import Banner from '@pages/store/components/Banner/Banner';
import BottomTab from '@pages/store/components/BottomTab/BottomTab';
import StoreDesign from '@pages/store/components/StoreDesign/StoreDesign';
import StoreInfo from '@pages/store/components/StoreInfo/StoreInfo';
import StoreMenu from '@pages/store/components/StoreMenu/StoreMenu';

import { sectionStyle } from './StorePage.css';

const StorePage = () => {
  const storeId = Number(useParams<{ id: string }>().id);
  const { data: storeData } = useFetchStoreInfo(storeId);

  const location = useLocation();
  const [recentCakeId, setRecentCakeId] = useState(location.state?.cakeId);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    startTransition(() => {
      setActiveTab(index);
    });

    setRecentCakeId(null);
  };

  const tabComponents = [
    <StoreDesign storeId={storeId} recentCakeId={recentCakeId} />,
    <StoreMenu storeId={storeId} />,
    <StoreInfo storeId={storeId} />,
  ];

  return (
    <>
      <Banner storeData={storeData} />
      <Tab
        tabType={'store'}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />
      <section className={sectionStyle}>{tabComponents[activeTab]}</section>
      <BottomTab storeId={storeId} />
    </>
  );
};

export default StorePage;
