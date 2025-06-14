import Recipe from '../models/Recipe.js';
import express from 'express';
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/by-ingredients', async (req, res) => {
  try {
    const { ingredients } = req.body;
    if (!Array.isArray(ingredients)) {
      return res.status(400).json({ error: 'Ingredients must be a non-empty array' });
    }
    if (ingredients.length === 0) {
      const recipes = await Recipe.find();
      return res.json(recipes);
    }

    const recipes = await Recipe.find({ ingredients: { $all: ingredients } });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    } 
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;