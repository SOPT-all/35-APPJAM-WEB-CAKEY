interface StoreRankType {
  storeId: number;
  storeName: string;
  storeLikesCount: number;
  station: string;
}

export interface StoreRankResponse {
  storeList: StoreRankType[];
}
