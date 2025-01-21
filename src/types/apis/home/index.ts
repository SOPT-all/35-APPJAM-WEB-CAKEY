export interface StoreRankResponse {
  storeList: Array<{
    storeId: number;
    storeName: string;
    storeLikesCount: number;
    station: string;
  }>;
}
