import React, { Component } from 'react';
import axios from 'axios';

export default class CreateMeal extends  Component{
constructor(props){
    super(props);

    this.onChangeFood = this.onChangeFood.bind(this);
    this.onChangeCarbs = this.onChangeCarbs.bind(this);
    this.onChangeProtein = this.onChangeProtein.bind(this);
    this.onChangeFats = this.onChangeFats.bind(this);
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
                    meals: response.data.map(meals => meals.food)
                })
            }
        })
}

onChangeFood(e){
    this.setState({
        food: e.target.value
    })
}

onChangeCarbs(e){
    this.setState({
        carbs: e.target.value
    })
}

onChangeProtein(e){
    this.setState({
        protein: e.target.value
    })
}

onChangeFats(e){
    this.setState({
        fats: e.target.value
    })
}

onChangeFiber(e){
    this.setState({
        fiber: e.target.value
    })
}

onSubmit(e) {
    e.preventDefault();

    const meal = {
        food: this.state.food,
        carbs: this.state.carbs,
        protein : this.state.protein,
        fats: this.state.fats,
        fiber: this.state.fiber
    }

    console.log(meal)

    axios.post('http://localhost:5000/meals/add', meal)
        .then(res => console.log(res.data));

    window.location = '/';
}

render() {
    return(
        <div>
            <h3>Create Meal Log</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Food</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.food}
                        onChange={this.onChangeFood}
                    />
                </div>
                <div>
                    <label>Carbs</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.carbs}
                        onChange={this.onChangeCarbs}
                    />
                </div>
                <div className="form-group">
                    <label>Protein</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.protein}
                        onChange={this.onChangeProtein}
                    />
                </div>
                <div className="form-group">
                    <label>Fats</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.fats}
                        onChange={this.onChangeFats}
                    />
                </div>
                <div className="form-group">
                    <label>Fiber</label>
                    <input type="text"
                        required
                        className="form-control"
                        value={this.state.fiber}
                        onChange={this.onChangeFiber}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create Meal Log"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}

}