import { useMutation, useQueryClient } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';
import { removeUser } from '@utils';

const deleteLogout = async () => {
  try {
    const response = await instance.delete(END_POINT.DELETE_USER_LOGOUT);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const useDeleteLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      queryClient.clear();
      removeUser();
      window.location.href = '/';
    },
  });
};
