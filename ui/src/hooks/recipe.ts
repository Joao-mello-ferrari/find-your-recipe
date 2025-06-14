import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Recipe = {
  _id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  image: string;
};

export const useRecipe = (ingredients: string[]) => {
  return useQuery({
    queryKey: ['recipe_by_ingredients', ingredients],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const { data } = await axios.post<Recipe[]>('http://localhost:3000/recipe/by-ingredients', {
        ingredients,
      });
      return data;
    },
    staleTime: Infinity,
  });
};
