import React, { Component } from 'react';
import './App.css';
import Ingredients from './components/Ingredients/Ingredients';
import IngredientsRecipe from './components/Ingredients/IngredientsRecipe';
import Search from './components/Search/Search';
import IngredientsSaveRecipe from './components/Ingredients/IngredientsSaveRecipe';
import beerImg from '../src/assets/beer1.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        'Apple Juice': false,
        'Barley': false ,
        'Common Spices': false,
        'Corn Syrup': false,
        'Extract': false,
        'Honey': false,
        'Hops': false,
        'Iodine Solution': false,
        'Love': false,
        'Malt': false,
        'Uncommon Spices': false,
        'Water': false,
        'Yeast': false
      },
      ingredientSearch: '',
      recipes: {
        testRecipe1: ['Water', 'Hops', 'Yeast'],
        coolRecipe1: ['Water', 'Extract', 'Yeast', 'Corn Syrup']
      },
      recipeSearch: ''
    };

    this.getSearchedRecipe = this.getSearchedRecipe.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSearchIngredients = this.handleSearchIngredients.bind(this);
    this.handleSearchRecipes = this.handleSearchRecipes.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }

  getSearchedRecipe = () => {
    if (!this.state.recipeSearch) { return ['']; }
    return this.state.recipes[this.state.recipeSearch];
  }

  getSearchedIngredient = () => {
    if (!this.state.ingredientSearch) { return this.state.ingredients; }
    return this.state.ingredientSearch;
  }

  getSearchIngredientsResults = (object, value) => {
    if (!value) { return ''; }
    return Object.keys(object).find(key => key.toLowerCase() === value.toLowerCase());
  }

  getSearchResults = (object, value) => {
    return Object.keys(object).find(key => key === value);
  }

  handleCheckedBox(checkbox) {
    const ingredients = {...this.state.ingredients}
    const value = checkbox.value;
    const ingredientsSet =  {...ingredients, [value]: checkbox.checked};
    this.setState({ingredients: ingredientsSet});
  }

  handleSearchIngredients = value => {
    if (!value) {
      return this.state.ingredients;
    }

    const result = this.getSearchIngredientsResults(this.state.ingredients, value);

    if (result) {
      this.setState({ingredientSearch: {[result]: false}});
    } else {
      this.setState({ingredientSearch: ''});
    }
  }

  handleSearchRecipes = value => {
    const result = this.getSearchResults(this.state.recipes, value);

    if (result) {
      this.setState({recipeSearch: result});
    }
  }

  saveRecipe = recipe => {
    let stateCopy = {...this.state};
    const newRecipe = [];
    Object.keys(stateCopy.ingredients).forEach(key => {
      if (stateCopy.ingredients[key]) {
        newRecipe.push(key);
      }
    });

    const recipeObj = JSON.parse(JSON.stringify({[recipe]: newRecipe}));
    const newRecipes = Object.assign(recipeObj, stateCopy.recipes);
    this.setState({recipes: newRecipes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beer Recipe Organizer</h1>
        </header>
        <div className="App-body">
          <div className="App-ingredients-list">
            <Search
              text="Find an Ingredient" 
              onChange={this.handleSearchIngredients}
            />
            <Ingredients 
              ingredients={this.getSearchedIngredient()}
              onChecked={this.handleCheckedBox}
            />
          </div>
          <div className="App-recipes">
            <Search
              text="Find a Recipe"
              onChange={this.handleSearchRecipes}
            />
            <IngredientsRecipe 
              className="App-searched-ingredients-list"
              list={this.getSearchedRecipe()}
              recipeName={this.state.recipeSearch}
            />
            <IngredientsSaveRecipe onChange={this.saveRecipe} />
          </div>
          <img className="App-beer-img" src={beerImg} alt="Mug of beer">
          </img>
        </div>
      </div>
    );
  }
}

export default App;
