import { StoreType } from "src/types/types";

export interface LikedStoreListResponse {
    nextStoreIdCursor: number,
    nextLikesCursor?: number,
    storeCount: number,
    stores: StoreType[],   
}