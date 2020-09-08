import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMeal extends  Component{
constructor(props){
    super(props);

    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeCarbs = this.onChangeCarbs.bind(this);
    this.onChangeProtein = this.onChangeProtein.bind(this);
    this.onChangeFiber = this.onChangeFiber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        food: '',
        carbs: 0,
        protein: 0,
        fats: 0,
        fiber: 0,
        meals: []
    }
}

componentDidMount() {
    axios.get('http://localhost:5000/meals/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    meals: response.data.map(meals => meals.food),
                    food: response.data[0].food
                })
            }
        })
}


}