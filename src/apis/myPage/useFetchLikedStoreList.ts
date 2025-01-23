import { useInfiniteQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import {
  ApiResponseType,
  ErrorResponse,
  OptionType,
  StoreCardListType,
} from '@types';

const fetchLikedStoreList = async (
  option: OptionType,
  storeLikesCursor: number,
  storeIdCursor: number
): Promise<StoreCardListType> => {
  try {
    const url = END_POINT.FETCH_LIKED_STORE_LIST(
      option,
      storeLikesCursor,
      storeIdCursor
    );
    const response =
      await instance.get<ApiResponseType<StoreCardListType>>(url);
    return response.data.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    if (errorResponse.response.status === 404)
      return {
        storeCount: 0,
        isLastData: true,
        stores: [],
      };
    throw error;
  }
};

export const useFetchLikedStoreList = (
  option: OptionType,
  isEnabled: boolean
) => {
  return useInfiniteQuery<StoreCardListType, Error>({
    queryKey: [queryKey.LIKED_STORE_LIST, option],
    queryFn: ({ pageParam }) => {
      const param = pageParam as {
        storeLikesCursor: number;
        storeIdCursor: number;
      };
      return fetchLikedStoreList(
        option,
        param.storeLikesCursor,
        param.storeIdCursor
      );
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.isLastData) {
        return {
          storeLikesCursor:
            'nextLikesCursor' in lastPage
              ? lastPage.nextLikesCursor
              : undefined,
          storeIdCursor:
            'lastStoreId' in lastPage
              ? lastPage.lastStoreId
              : (lastPage.nexStoreId ?? undefined),
        };
      }
      return null;
    },
    initialPageParam: { storeLikesCursor: undefined, storeIdCursor: undefined },
    enabled: isEnabled,
  });
};
