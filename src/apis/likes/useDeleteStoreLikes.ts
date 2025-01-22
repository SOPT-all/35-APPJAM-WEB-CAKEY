import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';

import { MutateResposneType } from '@types';

const deleteStoreLikes = async (
  storeId: number
): Promise<MutateResposneType> => {
  try {
    const response = await instance.delete(END_POINT.DELETE_LIKE('store', storeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDeleteStoreLikes = () => {
  return useMutation({
    mutationFn: (storeId: number) => deleteStoreLikes(storeId),
  });
};
