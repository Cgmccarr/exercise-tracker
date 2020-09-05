const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealsSchema = new Schema({
    food: {type: String, required: true},
    carbs: {type: Number, required: true},
    protein: {type: Number, required: true},
    fats: {type: Number, required: true},
    fiber: {type: Number, required: false},
}, {
    timestamps: true
});

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;