import { DesignItemType } from "src/types/types";

export interface DesignListLatestResponse {
    nextCakeIdCursor: number,
    isLastData: number,
    cakeCount: number,
    cakes: DesignItemType[]
}

export interface DesignListPopularityResponse {
    isLastData: number,
    cakeCount: number,
    cakes: DesignItemType[]
}