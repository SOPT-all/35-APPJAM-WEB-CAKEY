export interface StoreRank {
  storeId: number;
  storeName: string;
  storeLikesCount: number;
  station: string;
}

export interface StoreRankResponse {
  storeList: StoreRank[];
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
