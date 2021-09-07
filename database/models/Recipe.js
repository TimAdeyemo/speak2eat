const mongoose = require('mongoose');

// Saved Recipes
const recipeSchema = mongoose.Schema({
  canonical_id: Number,
  name: String,
  thumbnail_url: String,
  video_url: String,
  description: String,
  yields: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;