import { useState } from 'react';

import { useFetchStoreDetailInfo } from '@apis/store';

import { Modal } from '@components';
import { useModal } from '@hooks';
import { formatHours } from '@utils';

import { IcArrowDown20, IcLineLocation, IcPhone, IcTime } from '@svgs';

import {
  listStyle,
  listContainer,
  listBox,
  listTitle,
  listContent,
  listHour,
  toggleButton,
} from './StoreInfo.css';
import OrderFormModal from '../OrderFormModal/OrderFormModal';
import OrderGuideButton from '../OrderGuideButton/OrderGuideButton';

interface StoreInfoProps {
  storeId: number;
}

interface InfoItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const StoreInfo = ({ storeId }: StoreInfoProps) => {
  const { data: infoData } = useFetchStoreDetailInfo(storeId);

  const { isModalOpen, openModal, closeModal } = useModal();
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const formattedHours = formatHours(infoData);

  const infoItems: InfoItem[] = [
    {
      id: 'hours',
      icon: <IcTime width={24} height={24} />,
      title: '영업 시간',
      content: (
        <ul className={listContent}>
          <li className={listHour}>
            <span>{formattedHours[0]}</span>
            <IcArrowDown20
              width={20}
              height={20}
              className={toggleButton({ isToggleOpen })}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            />
          </li>
          {isToggleOpen &&
            formattedHours.slice(1).map((time) => (
              <li key={time} className={listHour}>
                {time}
              </li>
            ))}
        </ul>
      ),
    },
    {
      id: 'location',
      icon: <IcLineLocation width={24} height={24} />,
      title: '위치',
      content: <p className={listContent}>{infoData.address}</p>,
    },
    ...(infoData.phone
      ? [
          {
            id: 'contact',
            icon: <IcPhone width={24} height={24} />,
            title: '연락처',
            content: <p className={listContent}>{infoData.phone}</p>,
          },
        ]
      : []),
  ];

  return (
    <>
      <ul className={listStyle}>
        {infoItems.map(({ id, icon, title, content }) => (
          <li key={id} className={listContainer}>
            {icon}
            <div className={listBox}>
              <h2 className={listTitle}>{title}</h2>
              {content}
            </div>
          </li>
        ))}
        <OrderGuideButton onOpen={openModal} />
      </ul>

      {isModalOpen && (
        <Modal variant="center" backdropClick={closeModal} hasBackdrop>
          <OrderFormModal onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default StoreInfo;
