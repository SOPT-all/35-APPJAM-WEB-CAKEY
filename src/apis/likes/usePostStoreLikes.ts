import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { useToast } from '@contexts';
import queryClient from 'src/queryClient';

import { MutateResposneType } from '@types';

const postStoreLikes = async (storeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.post(END_POINT.POST_LIKE('store', storeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const usePostStoreLikes = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (storeId: number) => postStoreLikes(storeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.STORE_INFO],
      });
      queryClient.invalidateQueries({ queryKey: [queryKey.LIKED_STORE_LIST] });
      queryClient.invalidateQueries({
        queryKey: [queryKey.LIKES_STORE_COORDINATE_LIST],
      });

      showToast('save', '스토어를 찜했어요', true);
    },
  });
};
