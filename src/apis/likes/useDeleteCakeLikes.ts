import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { useToast } from '@contexts';
import queryClient from 'src/queryClient';

import { MutateResposneType } from '@types';

const deleteCakeLikes = async (cakeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.delete(
      END_POINT.DELETE_LIKE('cake', cakeId)
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDeleteCakeLikes = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (cakeId: number) => deleteCakeLikes(cakeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.STORE_DETAIL_DESIGN],
      });
      queryClient.invalidateQueries({ queryKey: [queryKey.LIKED_CAKE_LIST] });
      showToast('check', '찜을 취소했어요', false);
    },
    onError: () => {
      showToast('error', '연결에 문제가 생겼어요');
    },
  });
};
