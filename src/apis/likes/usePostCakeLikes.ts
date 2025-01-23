import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT, queryKey } from '@constants';
import { useToast } from '@contexts';
import queryClient from 'src/queryClient';

import { MutateResposneType } from '@types';

const postCakeLikes = async (cakeId: number): Promise<MutateResposneType> => {
  try {
    const response = await instance.post(END_POINT.POST_LIKE('cake', cakeId));
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const usePostCakeLikes = () => {
  const { showToast } = useToast();

  return useMutation({
    mutationFn: (cakeId: number) => postCakeLikes(cakeId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKey.STORE_DETAIL_DESIGN],
      });
      queryClient.invalidateQueries({ queryKey: [queryKey.LIKED_CAKE_LIST] });

      showToast('like', '케이크를 찜했어요', true);
    },
  });
};
