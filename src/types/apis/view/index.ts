export interface StoreCoordinate {
    storeId: number;
    latitude: number;
    longitude: number;
  }
  
  export interface StoreCoordinateListResponse {
    stores: StoreCoordinate[];
  }
  