import { useQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, DesignListResponse, ErrorResponse } from '@types';

const fetchDesignList = async (
  option: string,
  dayCategory: string,
  themeName: string
): Promise<DesignListResponse> => {
  try {
    const response = await instance.get<ApiResponseType<DesignListResponse>>(
      END_POINT.FETCH_DESIGN_LIST(option, dayCategory, themeName)
    );
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.status === 404) {
      return {
        nextCakeIdCursor: 0,
        nextCakeLikesCursor: 0,
        isLastData: false,
        cakeCount: 0,
        cakes: [],
      };
    }
    throw error;
  }
};

export const useFetchDesignList = (
  option: string,
  dayCategory: string,
  themeName: string
) => {
  return useQuery({
    queryKey: [queryKey.DESIGN_LIST, option, dayCategory, themeName],
    queryFn: () => fetchDesignList(option, dayCategory, themeName),
  });
};
