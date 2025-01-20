export interface CakeLikesLatest {
  cakeId: number;
  storeId: number;
  storeName: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
  cakeLikesCount: number;
}

export interface CakeLikesLatestResponse {
  cakes: CakeLikesLatest[];
}
