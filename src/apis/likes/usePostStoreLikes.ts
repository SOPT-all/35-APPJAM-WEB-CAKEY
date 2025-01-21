import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';

import { MutateResposneType } from '@types';

const postStoreLikes = async (storeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.post(END_POINT.POST_STORE_LIKES(storeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const usePostStoreLikes = () => {
  return useMutation({
    mutationFn: (storeId: number) => postStoreLikes(storeId),
  });
};
