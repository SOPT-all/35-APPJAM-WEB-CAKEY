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
  imageUrl: string;
  storeName: string;
  station: string;
  likeCount: number;
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
