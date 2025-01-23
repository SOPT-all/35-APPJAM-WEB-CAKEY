import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, DesignCardListType, OptionType } from '@types';

const fetchLikesCardList = async (
  option: OptionType,
  cakeLikesCursor: number,
  cakeIdCursor: number
): Promise<DesignCardListType> => {
  const url = END_POINT.FETCH_LIKED_CAKE_LIST(
    option,
    cakeLikesCursor,
    cakeIdCursor
  );
  const response = await instance.get<ApiResponseType<DesignCardListType>>(url);
  if (!response.data) return { cakeCount: 0, isLastData: true, cakes: [] };
  return response.data.data;
};

export const useFetchLikedCakeList = (
  option: OptionType,
  isEnabled: boolean
) => {
  return useInfiniteQuery<DesignCardListType, Error>({
    queryKey: [queryKey.LIKED_CAKE_LIST, option],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        cakeLikesCursor: number;
        cakeIdCursor: number;
      };
      return fetchLikesCardList(
        option,
        param.cakeLikesCursor,
        param.cakeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          cakeLikesCursor:
            'nextLikeCursor' in lastPage ? lastPage.nextLikeCursor : undefined,
          cakeIdCursor:
            'nextCakeIdCursor' in lastPage
              ? lastPage.nextCakeIdCursor
              : (lastPage.cakeIdCursor ?? undefined),
        };
      }
      return null;
    },
    initialPageParam: { cakeLikesCursor: undefined, cakeIdCursor: undefined },
    enabled: isEnabled,
    gcTime: 0,
  });
};
