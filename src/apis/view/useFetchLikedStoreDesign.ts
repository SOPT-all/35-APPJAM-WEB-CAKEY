import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, OptionType, StationDesignResponse } from '@types';

const fetchLikedStoreDesign = async (
  option: OptionType,
  cakeIdCursor?: number,
  cakeLikesCursor?: number
): Promise<StationDesignResponse> => {
  const url = END_POINT.FETCH_LIKED_STORE_DESIGN_LIST(
    option,
    cakeIdCursor,
    cakeLikesCursor
  );
  const response =
    await instance.get<ApiResponseType<StationDesignResponse>>(url);
  if (!response.data) return { isLastData: true, cakeCount: 0, cakes: [] };
  return response.data.data;
};

export const useFetchLikedStoreDesign = (
  option: OptionType,
  isEnabled: boolean
) => {
  return useInfiniteQuery<StationDesignResponse, Error>({
    queryKey: [queryKey.LIKED_STORE_DESIGN_LIST, option],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeIdCursor: number;
        cakeLikesCursor: number;
      };
      return fetchLikedStoreDesign(
        option,
        param.cakeIdCursor,
        param.cakeLikesCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : (lastPage.cakeIdCursor ?? undefined),
          cakeLikesCursor:
            'cakeLikesCursor' in lastPage
              ? lastPage.cakeLikesCursor
              : undefined,
        };
      }
      return null;
    },
    initialPageParam: { cakeIdCursor: undefined, cakeLikesCursor: undefined },
    enabled: isEnabled,
  });
};
