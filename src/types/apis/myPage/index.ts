import { StoreType } from "src/types/types";

export interface LikedStoreListResponse {
    nextStoreIdCursor: number,
    nextLikesCursor?: number,
    storeCount: number,
    stores: StoreType[],   
}
export interface UserResponse {
  userName: string;
  userEmail: string;
}

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
