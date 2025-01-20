export interface StoreRankResponse {
  stores: Array<{
    storeId: number;
    storeName: string;
    storeLikesCount: number;
    station: string;
  }>;
}
