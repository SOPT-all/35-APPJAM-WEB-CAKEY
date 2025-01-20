import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { queryKey } from '@constants';

import { ApiResponseType } from '@types';

interface cakeType {
  cakeId: string;
  isLiked: boolean;
  imageUrl: string;
}

interface DesignDetailResponse {
  storeId: number;
  storeName: string;
  station: string;
  cakes: cakeType[];
}

const fetchDesignDetail = async (
  cakeId: number,
  daycategory: string,
  themeName: string
): Promise<DesignDetailResponse> => {
  try {
    const response = await instance.get<ApiResponseType<DesignDetailResponse>>(
      `/api/v1/cake/${cakeId}/select?dayCategory=${daycategory}&theme=ALL`
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchDesignDetail = (
  cakeId: number,
  daycategory: string,
  themeName: string
) => {
  return useSuspenseQuery({
    queryKey: [queryKey.DESIGN_DETAIL],
    queryFn: () => fetchDesignDetail(cakeId, daycategory, themeName),
  });
};
