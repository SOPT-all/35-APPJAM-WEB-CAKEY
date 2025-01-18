export interface StoreImagesType {
  imageId: number;
  imageUrl: string;
}

export interface StoreType {
  storeId: number;
  storeName: string;
  station: string;
  address: string;
  isLiked: boolean;
  storeLikesCount: number;
  images: StoreImagesType[];
}

export interface DesignItemType {
  cakeId: number;
  storeId: number;
  storeName: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
  likeCount: number;
}

export interface DesignDetailType {
  cakeId: number;
  imageUrl: string;
  isLiked: boolean;
}

export type CategoryType = 'BIRTH' | 'CHEER' | 'ANNIV' | 'SEASON';
export type SubCategoryType =
  | 'ALL'
  | 'THEME'
  | 'CUTE'
  | 'MINIMAL'
  | 'CHARAC'
  | 'LUXURY'
  | 'HUMOR'
  | 'FANTASY'
  | 'ELSE';

export interface StationType {
  stationEnName: string;
  stationKrName: string;
  latitude: number;
  longitude: number;
}

export interface CoordinateType {
  storeId: number;
  latitude: number;
  longitutde: number;
}
