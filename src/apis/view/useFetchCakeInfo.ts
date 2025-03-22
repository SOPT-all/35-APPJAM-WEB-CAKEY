import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, CakeInfoResponse } from '@types';

const fetchCakeInfo = async (
  cakeId: number
): Promise<CakeInfoResponse | null> => {
//   try {
//     const response = await instance.get<ApiResponseType<CakeInfoResponse>>(
//       END_POINT.FETCH_CAKE_INFO(cakeId)
//     );
//     return response.data?.data ?? null;
//   } catch (error) {
//     console.log(error);
//     // if (error.response?.data?.code === 40410){
//     //     return null
//     // }
//     throw error;
//   }
const response = await instance.get<ApiResponseType<CakeInfoResponse>>(
    END_POINT.FETCH_CAKE_INFO(cakeId)
  );
  return response.data?.data ?? null;
};

export const useFetchCakeInfo = (cakeId: number) => {
  return useSuspenseQuery({
    queryKey: [queryKey.CAKE_INFO, cakeId],
    queryFn: () => fetchCakeInfo(cakeId),
  });
};
