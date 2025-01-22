import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType } from '@types';

interface cakeType {
  cakeId: number;
  isLiked: boolean;
  imageUrl: string;
}

interface DesignDetailResponse {
  storeId: number;
  storeName: string;
  station: string;
  cake: cakeType[];
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
  return useQuery({
    queryKey: [queryKey.DESIGN_DETAIL, cakeId],
    queryFn: () => fetchDesignDetail(cakeId, dayCategory, themeName),
  });
};
