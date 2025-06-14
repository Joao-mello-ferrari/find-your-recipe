import { Schema, model } from 'mongoose';

const recipeSchema = new Schema({
  name: { type: String, required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  image: { type: String, required: true }
});

export default model('Recipe', recipeSchema);
