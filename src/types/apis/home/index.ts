export interface StoreRankResponse {
  stores: Array<{
    storeId: number;
    storeName: string;
    storeLikesCount: number;
    station: string;
  }>;
}

export interface CakeRankResponse {
  map(arg0: (cake: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  cakes: [
    {
      cakeId: number;
      storeId: number;
      imageUrl: string;
      storeName: string;
      cakeLikesCount: number;
      station: string;
      isLiked: boolean;
    },
  ];
}
