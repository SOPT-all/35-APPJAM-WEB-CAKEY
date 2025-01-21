import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';

import { MutateResposneType } from '@types';

const deleteCakeLikes = async (cakeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.delete(END_POINT.DELETE_CAKE_LIKES(cakeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDeleteCakeLikes = () => {
  return useMutation({
    mutationFn: (cakeId: number) => deleteCakeLikes(cakeId),
  });
};
