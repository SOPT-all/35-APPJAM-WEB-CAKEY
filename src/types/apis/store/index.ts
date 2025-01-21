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

type NullableString = string | null;

type WeeklySchedule = {
  [key in `${'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'}${'Open' | 'Close'}`]: NullableString;
};

export interface StoreDetailInfoResponse extends WeeklySchedule {
  address: string;
  phone: NullableString;
}

export interface StoreLinkResponse {
  kakaoLink: string;
}
