export interface StoreInfoResponse {
  storeId: number;
  storeName: string;
  address: string;
  station: string;
  isLiked: boolean;
  imageUrl: string;
  storeLikesCount: number;
}

export interface StoreDetailDesign {
  cakeId: number;
  imageUrl: string;
  isLiked: boolean;
}

export interface StoreDetailDesignResponse {
  storeDesignDtoList: StoreDetailDesign[];
}

export interface StoreDetailSize {
  sizeName: string;
  price: number;
}

export interface StoreDetailMenuResponse {
  sizeDtoList: StoreDetailSize[];
  taste: string;
}

export interface StoreDetailInfoResponse {
  monOpen: string | null;
  monClose: string | null;
  tueOpen: string | null;
  tueClose: string | null;
  wedOpen: string | null;
  wedClose: string | null;
  thuOpen: string | null;
  thuClose: string | null;
  friOpen: string | null;
  friClose: string | null;
  satOpen: string | null;
  satClose: string | null;
  sunOpen: string | null;
  sunClose: string | null;
  address: string;
  phone: string;
}

export interface StoreLinkResponse {
  kakaoLink: string;
}
