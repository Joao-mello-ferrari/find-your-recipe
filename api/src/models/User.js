import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  starred: [{ type: String, required: true }],
});

export default model('User', userSchema);
