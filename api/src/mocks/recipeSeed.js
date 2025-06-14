import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Recipe from '../models/Recipe.js';

dotenv.config();

const mockRecipes = [
  {
    name: "Garlic Broccoli Stir Fry",
    ingredients: ["broccoli", "garlic", "soy sauce", "olive oil"],
    instructions: "Heat oil, add garlic and broccoli, stir-fry for 5 minutes. Add soy sauce, cook 2 more minutes.",
    image: "https://www.chinasichuanfood.com/wp-content/uploads/2014/02/garlic-broccoli-stir-fry-8.jpg"
  },
  {
    name: "Spaghetti Aglio e Olio",
    ingredients: ["spaghetti", "garlic", "olive oil", "chili flakes", "parsley"],
    instructions: "Cook pasta. Sauté garlic in oil, add chili flakes. Mix with pasta and garnish with parsley.",
    image: "https://www.simplyrecipes.com/thmb/gjS-FSuYnqK3fclkE2fWhYl1VWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Spaghetti-Aglio-e-Olio-LEAD-2-c8e7e8c6edb04a8691463c6ea8cd4ba1.jpg"
  },
  {
    name: "Chicken and Rice Bowl",
    ingredients: ["chicken", "rice", "broccoli", "soy sauce"],
    instructions: "Cook rice, steam broccoli, grill chicken. Combine and drizzle with soy sauce.",
    image: "https://modernmealmakeover.com/wp-content/uploads/2020/10/IMG_6548-4.jpg"
  },
  {
    name: "Tomato Basil Soup",
    ingredients: ["tomato", "basil", "garlic", "onion", "vegetable broth"],
    instructions: "Sauté onion and garlic, add tomatoes and broth. Simmer and blend. Add basil before serving.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRasVSZLwT2ye0YhA2NvCh5TRZ5CKS-d4DQbw&s"
  },
  {
    name: "Quinoa Salad",
    ingredients: ["quinoa", "cucumber", "tomato", "feta cheese", "olive oil", "lemon juice"],
    instructions: "Cook quinoa. Chop vegetables. Mix all ingredients and drizzle with olive oil and lemon juice.",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad.jpg"
  },
  {
    name: "Beef Tacos",
    ingredients: ["ground beef", "taco shells", "lettuce", "cheddar cheese", "tomato", "taco seasoning"],
    instructions: "Cook beef with taco seasoning. Fill shells with beef, lettuce, tomato, and cheese.",
    image: "https://danosseasoning.com/wp-content/uploads/2022/03/Beef-Tacos-1024x767.jpg"
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Recipe.deleteMany({});
    await Recipe.insertMany(mockRecipes);
    console.log('✅ Recipes seeded successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding recipes:', err);
    process.exit(1);
  }
};

seed();
