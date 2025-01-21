import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, LikedStoreListResponse } from '@types';

const fetchLikedStoreList = async (
  option: string,
  storeIdCursor: number = 0,
  size: number = 10
): Promise<LikedStoreListResponse> => {
  try {
    const response = await instance.get<
      ApiResponseType<LikedStoreListResponse>
    >(END_POINT.FETCH_LIKED_STORE_LIST(option, storeIdCursor, size));
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchLikedStoreList = (
  option: string,
  storeIdCursor: number = 0,
  size: number = 10,
  options?: { enabled?: boolean }
) => {
  return useSuspenseQuery({
    queryKey: [queryKey.LIKED_STORE_LIST, option],
    queryFn: () => fetchLikedStoreList(option, storeIdCursor, size),
    ...options,
  });
};
