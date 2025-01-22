import { useMutation } from '@tanstack/react-query';

import { instance } from '@apis/instance';

import { END_POINT } from '@constants';
import { useEasyNavigate } from '@hooks';
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
  const { goHomePage } = useEasyNavigate();
  return useMutation({
    mutationFn: deleteLogout,
    onSuccess: () => {
      removeUser();
      goHomePage();
    },
  });
};
