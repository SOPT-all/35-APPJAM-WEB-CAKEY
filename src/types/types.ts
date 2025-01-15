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
  storeId: number;
  cakeId: number;
  imageUrl: string;
  storeName: string;
  station: string;
  likeCount: number;
  isLiked: boolean;
}
