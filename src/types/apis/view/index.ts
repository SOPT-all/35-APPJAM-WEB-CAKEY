export interface StoreCoordinate {
  storeId: number;
  latitude: number;
  longitude: number;
}

export interface StoreCoordinateListResponse {
  stores: StoreCoordinate[];
}

export interface StationType {
  stationEnName: string;
  stationKrName: string;
  latitude: number;
  longitude: number;
}

// 해당 역 디자인 조회
interface StationDesign {
  cakeId: number;
  storeId: number;
  storeName: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
  cakeLikesCount: number;
}

export interface StationDesignResponse {
  isLastData: boolean;
  nextCakeIdCursor?: number;
  cakeIdCursor?: number;
  cakeLikesCursor?: number;
  cakeCount: number;
  cakes: StationDesign[];
}

// 스토어 정보 리스트 조회
interface StoreImage {
  imageId: number;
  imageUrl: string;
}

export interface StationStore {
  storeId: number;
  storeName: string;
  station: string;
  address: string;
  storeLikesCount: number;
  isLiked: boolean;
  images: StoreImage[];
}

export interface StationStoreResponse {
  isLastData: boolean;
  nextStoreIdCursor?: number;
  nextLikesCursor?: number;
  lastStoreId?: number;
  storeCount: number;
  stores: StationStore[];
}
