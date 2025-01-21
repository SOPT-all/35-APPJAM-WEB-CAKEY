import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

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
  dayCategory: string,
  themeName: string
): Promise<DesignDetailResponse> => {
  try {
    const response = await instance.get<ApiResponseType<DesignDetailResponse>>(
      END_POINT.FETCH_DESIGN_DETAIL(cakeId, dayCategory, themeName)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchDesignDetail = (
  cakeId: number,
  dayCategory: string,
  themeName: string
) => {
  return useSuspenseQuery({
    queryKey: [queryKey.DESIGN_DETAIL],
    queryFn: () => fetchDesignDetail(cakeId, dayCategory, themeName),
  });
};
