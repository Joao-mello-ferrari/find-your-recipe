import User from '../models/user.js';
import express from 'express';
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const { email } = _req.query;
    const recipes = await User.find({ email });
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/star', async (req, res) => {
  try {
    const { email, name, recipeId } = req.body;
    if (!email || !name || !recipeId) {
      return res.status(400).json({ error: 'email, name, and recipeId are required' });
    }

    // Find or create user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, name, starred: [] });
    }

    // Avoid duplicates
    if (!user.starred.includes(recipeId)) {
      user.starred.push(recipeId);
      await user.save();
    }

    res.json({ message: 'Recipe starred', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;