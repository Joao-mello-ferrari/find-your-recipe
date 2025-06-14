import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useUser = (email: string) => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { data } = await axios.get<string[]>('http://localhost:3000/user', { params: {email}});
      return data;
    },
    staleTime: Infinity,
  });
};
