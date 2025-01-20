import { useSuspenseQuery } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';

import { ApiResponseType, DesignListResponse } from '@types';

const fetchDesignList = async (
  daycategory: string,
  theme: string
): Promise<DesignListResponse> => {
  try {
    const response = await instance.get<ApiResponseType<DesignListResponse>>(
      END_POINT.FETCH_DESIGN_LIST(daycategory, theme)
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useFetchDesignList = (daycategory: string, theme: string) => {
  return useSuspenseQuery({
    queryKey: [queryKey.DESIGN_LIST],
    queryFn: () => fetchDesignList(daycategory, theme),
  });
};
