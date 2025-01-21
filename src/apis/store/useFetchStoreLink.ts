import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreLinkResponse } from '@types';

const fetchStoreLink = async (storeId: number): Promise<StoreLinkResponse> => {
  try {
    const response = await instance.get<ApiResponseType<StoreLinkResponse>>(
      END_POINT.FETCH_STORE_LINK(storeId)
    );
    return response.data.data;
  } catch (error) {
    console.error();
    throw error;
  }
};

export const useFetchStoreLink = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_LINK],
    queryFn: () => fetchStoreLink(storeId),
  });
};
