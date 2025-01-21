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
