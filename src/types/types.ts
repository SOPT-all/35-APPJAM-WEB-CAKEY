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
  cakeLikesCount: number;
}

export interface DesignDetailType {
  cakeId: number;
  imageUrl: string;
  isLiked: boolean;
}

// 타입 뭉치지말고 나눠서 쓰되, 겹치는거 상속받아서 처리하기

// storeCardList 기본 type
export interface StoreCardListType {
  storeCount: number;
  stores: StoreType[];
}

// designCardList 기본 Type
export interface DesignCardListType {
  cakeCount: number;
  cakes: DesignItemType[];
}

// 스토어 정보 리스트 (최신순)
interface StoreInfoatestType extends StoreCardListType {
  nextStoreIdCursor: number;
  isLastData: boolean;
}
// 스토어 정보 리스트 (인기순)
interface StoreInfoPopularityType extends StoreCardListType {
  nextLikesCursor: number;
  lastStoreIdCursor: number;
}
// 해당 역 디자인 조회 (최신순)
interface StationDesignLatestType extends DesignCardListType {
  cakeIdCursor: number;
}
// 해당 역 디자인 조회 (인기순)
interface StationDesignPopularity extends DesignCardListType {
  cakeLikesCursor: number;
  cakeIdCursor: number;
}
// 찜한 스토어 조회 (최신순)
interface LikedStoreInfo
// 찜한 스토어 조회 (인기순)
// 찜한 스토어의 디자인 조회 (최신순)
// 찜한 스토어 디자인 조회 (인기순)
// 디자인 둘러보기 조회 (최신순)
// 디자인 둘러보기 조회 (인기순)
// 찜한 디자인 조회 (최신순)
// 찜한 디자인 조회 (인기순)

export interface StoreCardListType {
  storeCount: number;
  stores: StoreType[];
  nextStoreIdCursor?: number;
  isLastData?: boolean;
  nextLikesCursor?: number;
  lastStoreIdCursor?: number;
}

export interface DesignCardListType {
  cakeCount: number;
  cakes: DesignItemType[];
  cakeIdCursor?: number;
  cakeLikesCursor?: number;
  nextCakeIdCursor?: number;
  nextCakeLikesCursor?: number;
  isLastData?: boolean;
  nextLikeCursor?: number;
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

export type ItemType =
  | 'store'
  | 'design'
  | 'likedStore'
  | 'likedDesign'
  | 'likedStoreDesign';
export type OptionType = 'latest' | 'popularity';

export type BottomSheetState = 'closed' | 'default' | 'opened';
