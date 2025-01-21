import { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  useFetchStoreDetailDesign,
  useFetchStoreDetailInfo,
  useFetchStoreDetailSize,
  useFetchStoreInfo,
  useFetchStoreLink,
} from '@apis/store';

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
  const { data: designData } = useFetchStoreDetailDesign(storeId);
  const { data: menuData } = useFetchStoreDetailSize(storeId);
  const { data: infoData } = useFetchStoreDetailInfo(storeId);
  const { data: linkData } = useFetchStoreLink(storeId);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabComponents = [
    <StoreDesign designData={designData} />,
    <StoreMenu menuData={menuData} />,
    <StoreInfo infoData={infoData} />,
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
      <BottomTab kakaoLink={linkData.kakaoLink} />
    </>
  );
};

export default StorePage;
