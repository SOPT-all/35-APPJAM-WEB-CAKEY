import { useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import { AuthModal, Modal } from '@components';
import { MyLocation } from '@constants';
import { useBottomSheet, useModal } from '@hooks';
import { useMapLoader } from '@pages/view/hooks';
import { useKakaoMap } from '@pages/view/hooks/useKakaoMap';
import { getMarkerIcon } from '@utils';

import {
  IcGpsmarkerOff,
  IcGpsmarkerOn,
  IcSavedOff24,
  IcSavedOn24,
} from '@svgs';

import { buttonSectionStyle, mapContainer, mapStyle } from './kakaoMap.css';
import MapBottomSheet from '../MapBottomSheet/MapBottomSheet';
import MapButton from '../MapButton/MapButton';
import SelectedStoreModal from '../SelectedStoreModal/SelectedStoreModal';

import { StationType } from '@types';

interface KakaoMapProps {
  currentLocation: StationType;
}

const KakaoMap = ({ currentLocation }: KakaoMapProps) => {
  useMapLoader();
  const { animateState, handleAnimateChange } = useBottomSheet();
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    selectedStoreId,
    storeMarkerList,
    currentPosition,
    center,
    isSaveActive,
    isGpsActive,
    mapLevel,
    setCenter,
    handleCenterChanged,
    handleGpsButtonClick,
    handleSaveButtonClick,
    handleMarkerClick,
    handleMapClick,
  } = useKakaoMap(currentLocation, handleAnimateChange, openModal);

  useEffect(() => {
    if (selectedStoreId !== 0) {
      const clickedMarker = storeMarkerList.find((marker) => marker.clicked);
      if (clickedMarker) {
        setCenter({
          lat: clickedMarker.latitude,
          lng: clickedMarker.longitude,
        });
      }
    }
  }, [selectedStoreId, storeMarkerList, setCenter]);

  return (
    <>
      <div className={mapContainer}>
        <Map
          center={center}
          level={mapLevel}
          className={mapStyle({ animateState })}
          onCenterChanged={handleCenterChanged}
          onClick={handleMapClick}
        >
          {storeMarkerList.map((location) => {
            const { src, size } = getMarkerIcon(location, isSaveActive);

            return (
              <MapMarker
                key={location.storeId}
                position={{ lat: location.latitude, lng: location.longitude }}
                image={{
                  src,
                  size,
                }}
                onClick={() => handleMarkerClick(location.storeId)}
              />
            );
          })}
          <MapMarker
            image={{
              src: MyLocation,
              size: { width: 32, height: 32 },
            }}
            position={currentPosition}
          />
        </Map>
        <section className={buttonSectionStyle}>
          <MapButton
            isActive={isSaveActive}
            onClick={handleSaveButtonClick}
            activeIcon={<IcSavedOn24 width={24} height={24} />}
            inactiveIcon={<IcSavedOff24 width={24} height={24} />}
          />
          <MapButton
            isActive={isGpsActive}
            onClick={handleGpsButtonClick}
            activeIcon={<IcGpsmarkerOn width={24} height={24} />}
            inactiveIcon={<IcGpsmarkerOff width={24} height={24} />}
          />
        </section>
      </div>
      {selectedStoreId === 0 ? (
        <MapBottomSheet
          selectedStation={currentLocation.stationEnName}
          isSaveActive={isSaveActive}
          animateState={animateState}
          handleAnimateChange={handleAnimateChange}
          onSelectStore={handleMarkerClick}
        />
      ) : (
        <Modal variant="bottom">
          <SelectedStoreModal storeId={selectedStoreId} />
        </Modal>
      )}
      {isModalOpen && (
        <Modal variant="center" hasBackdrop backdropClick={closeModal}>
          <AuthModal
            modalText="로그인이 필요한 기능이에요!"
            closeButtonText="닫기"
            authActionButtonText="로그인 하러가기"
            onClose={closeModal}
          />
        </Modal>
      )}
    </>
  );
};

export default KakaoMap;
