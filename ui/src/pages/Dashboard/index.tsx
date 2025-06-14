import React, { useState } from "react";
import {
  Container,
  RecepiesContainer,
  RecipeCard,
  DetailsContainer,
  Title,
  Image,
} from "./styles";
import { Input } from "../../components/Input";
import { useRecipe } from "../../hooks/recipe";
import { Ingredients } from "../../components/Ingredients";
import { Register } from "../../components/Register";
import { useUser } from "../../hooks/user";

export const Dashboard: React.FC = () => {
  const [ingredient, setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([] as string[]);
  const [user, setUser] = useState<string | null>(() => localStorage.getItem("user_email"));
  const [starredIds, setStarredIds] = useState(() => {
    const currentStarred = localStorage.getItem("starred_recipes");
    return currentStarred ? JSON.parse(currentStarred) : [];
  });
  
  // Fetch recepies and user starred from api
  const { data, isError, isLoading } = useRecipe(ingredients);
  // const { data: starredIds } = useUser(user || "");
  
  const displayRecipes = data && data.length > 0;

  const handleAddIngredient = () => {
    if (ingredient.trim() !== "") {
      setIngredients((prev) => [...prev, ingredient.trim()]);
      setIngredient("");
    }
  };

  const handleDeleteIngredient = (name: string) => {
    setIngredients((prev) => prev.filter((ing) => ing !== name));
  };

  const handleAddStar = (recipeId: string) => {
    const currentStarred = localStorage.getItem("starred_recipes");
    const starredIds = currentStarred ? JSON.parse(currentStarred) : [];
    // Check if the recipeId is already starred
    if (starredIds.includes(recipeId)) {
      return; // If already starred, do nothing
    }
    
    // Add the recipeId to the starred IDs
    const newIds = [...starredIds, recipeId];
    setStarredIds(newIds);
    localStorage.setItem("starred_recipes", JSON.stringify(newIds));
  };

  const handleRemoveStar = (recipeId: string) => {
    const currentStarred = localStorage.getItem("starred_recipes");
    const updatedStarredIds = currentStarred ? JSON.parse(currentStarred) : [];
    
    // Remove the recipeId from the starred IDs, if exists
    const index = updatedStarredIds.indexOf(recipeId);
    if (index > -1) {
      updatedStarredIds.splice(index, 1);
    }

    // Update localStorage with the new starred IDs
    setStarredIds(updatedStarredIds);
    localStorage.setItem("starred_recipes", JSON.stringify(updatedStarredIds));
  };

  if(!user) {
    return (
      <Container>
        <Register onRegister={setUser}/>
      </Container>
    )
  }


  return (
    <Container>
      <h1>Type your ingredients below 😋</h1>
      <Input value={ingredient} onChange={(value) => setIngredient(value)} onEnter={handleAddIngredient} />
      
      <Ingredients ingredients={ingredients} onDelete={handleDeleteIngredient}/>
      
      {isLoading && <p>Loading recipes...</p>}
      
      {isError && <p>Error loading recipes. Please try again later.</p>}
      {data && data.length === 0 && (
        <p>No recipes found for the given ingredients.</p>
      )}
      
      <RecepiesContainer>
        {displayRecipes &&
          data.map((recipe) => (
            <RecipeCard key={recipe._id}>
              <Image src={recipe.image} alt={recipe.name} />
              <DetailsContainer>
                <Title>
                  {recipe.name}
                  &nbsp;
                  {starredIds && starredIds.includes(recipe._id) ? (
                    <div aria-label="starred" onClick={()=>handleRemoveStar(recipe._id)}>⭐</div>
                  ) : (
                    <div aria-label="not starred" onClick={()=>handleAddStar(recipe._id)}>☆</div>
                  )}  
                </Title>
                <p>
                  <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
                </p>
                <p>
                  <strong>Instructions:</strong> {recipe.instructions}
                </p>
              </DetailsContainer>
            </RecipeCard>
          ))}
      </RecepiesContainer>
    </Container>
  );
};
