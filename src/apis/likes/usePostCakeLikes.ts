import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';

import { MutateResposneType } from '@types';

const postCakeLikes = async (cakeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.post(END_POINT.DELETE_LIKE('cake', cakeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const usePostCakeLikes = () => {
  return useMutation({
    mutationFn: (cakeId: number) => postCakeLikes(cakeId),
  });
};
