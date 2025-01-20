import { DesignCardListType } from "src/types/types";

export interface DesignListResponse {
    nextCakeIdCursor: number,
    isLastData: number,
    cakeCount: number,
    cakes: DesignCardListType
}