import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, StoreLinkResponse } from '@types';

const fetchStoreLink = async (storeId: number): Promise<string> => {
  const response = await instance.get<ApiResponseType<StoreLinkResponse>>(
    END_POINT.FETCH_STORE_LINK(storeId)
  );
  if (!response.data) return '';
  return response.data.data.kakaoLink;
};

export const useFetchStoreLink = (storeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_LINK, storeId],
    queryFn: () => fetchStoreLink(storeId),
  });
};
