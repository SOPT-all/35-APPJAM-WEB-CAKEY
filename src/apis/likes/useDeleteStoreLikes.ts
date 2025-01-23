import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { useToast } from '@contexts';
import queryClient from 'src/queryClient';

import { MutateResposneType } from '@types';

const deleteStoreLikes = async (
  storeId: number
): Promise<MutateResposneType> => {
  try {
    const response = await instance.delete(
      END_POINT.DELETE_LIKE('store', storeId)
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDeleteStoreLikes = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (storeId: number) => deleteStoreLikes(storeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.STORE_INFO],
      });
      queryClient.invalidateQueries({ queryKey: [queryKey.LIKED_STORE_LIST] });
      showToast('check', '찜을 취소했어요', false);
    },
    onError: () => {
      showToast('error', '연결에 문제가 생겼어요');
    },
  });
};
