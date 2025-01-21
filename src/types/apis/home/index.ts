export interface StoreRankResponse {
  stores: Array<{
    storeId: number;
    storeName: string;
    storeLikesCount: number;
    station: string;
  }>;
}

export interface CakeRank {
  cakeId: number;
  storeId: number;
  imageUrl: string;
  storeName: string;
  cakeLikesCount: number;
  station: string;
  isLiked: boolean;
}

export interface CakeRankResponse {
  cakeList: CakeRank[];
}
