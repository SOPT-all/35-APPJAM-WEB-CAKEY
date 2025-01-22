import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';

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
  return useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      localStorage.removeItem('user');
    },
  });
};
