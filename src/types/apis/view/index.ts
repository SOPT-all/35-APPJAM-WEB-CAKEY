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
  nextCakeIdCursor: number;
  cakeCount: number;
  cakes: StationDesign[];
}
