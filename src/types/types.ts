export interface StoreImagesType {
  imageId: number;
  imageUrl: string;
}

export interface StoreType {
  storeId: number;
  storeName: string;
  station: string;
  address: string;
  isLiked: boolean;
  storeLikesCount: number;
  images: StoreImagesType[];
}

export interface DesignItemType {
  cakeId: number;
  storeId: number;
  storeName: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
  likeCount: number;
}
