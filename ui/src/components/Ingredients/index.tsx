import React from 'react';
import { IngredientsContainer, IngredientItem, DeleteIcon } from './styles';

interface IngredientsProps {
  ingredients: string[];
  onDelete: (name: string) => void;
};

export const Ingredients: React.FC<IngredientsProps> = ({ ingredients, onDelete }) => (
  <IngredientsContainer>
    {ingredients.map((name) => (
      <IngredientItem key={`${name}-${Math.floor(Math.random() * 1000000)}`}>
        <span>{name}</span>
        <DeleteIcon
          aria-label={`Delete ${name}`}
          onClick={() => onDelete(name)}
          title="Delete"
        >
          &#10005;
        </DeleteIcon>
      </IngredientItem>
    ))}
  </IngredientsContainer>
);
