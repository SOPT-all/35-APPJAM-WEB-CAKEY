import { DesignItemType, StoreType } from 'src/types/types';

export interface LikedStoreListResponse {
  nextStoreIdCursor: number;
  nextLikesCursor?: number;
  storeCount: number;
  stores: StoreType[];
}

export interface UserResponse {
  userName: string;
  userEmail: string;
}

export interface LikedCakeListResponse {
  nextCakeIdCursor: number;
  cakeCount: number;
  isLastData: boolean;
  cakes: DesignItemType[];
}
