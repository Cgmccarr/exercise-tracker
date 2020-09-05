const router = require('express').Router();
let Meals = require('../models/meals.model');

router.route('/').get((req, res) => {
    Meals.find()
        .then(meals => res.json(meals))
        .catch(err => res.status(400).json("Error " + err));
});

router.route('/add').post((req, res) => {
    const food = req.body.food;
    const carbs = Number(req.body.carbs);
    const protein = Number(req.body.protein);
    const fats = Number(req.body.fats);
    const fiber = Number(req.body.fiber);

    const newMeal = new Meals({
        food,
        carbs,
        protein,
        fats,
        fiber,
    });

    newMeal.save()
        .then(() => res.json('Meal added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});