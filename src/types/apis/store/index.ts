import { DesignItemType } from "src/types/types";

export interface DesignListResponse {
    nextCakeIdCursor?: number,
    nextCakeLikesCursor?: number,
    isLastData: boolean,
    cakeCount: number,
    cakes: DesignItemType[]
}