import { queryKey } from '@constants';
import { useSuspenseQuery } from '@tanstack/react-query';

const fetchStoreCoordinateList = async (station: string): Promise<> => {};

export const useFetchStoreCoordinateList = (station: string) => {
  return useSuspenseQuery({
    queryKey: [queryKey.STORE_COORDINATE_LIST],
    queryFn: () => fetchStoreCoordinateList(station),
  });
};
