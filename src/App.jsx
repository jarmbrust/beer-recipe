import React, { Component } from 'react';
import './App.css';
import Ingredients from './components/Ingredients/Ingredients';
import IngredientsRecipe from './components/Ingredients/IngredientsRecipe';
import SearchRecipes from './components/Search/SearchRecipes';
import IngredientsSaveRecipe from './components/Ingredients/IngredientsSaveRecipe';
import beerImg from '../src/assets/beer1.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        'Apple Juice',
        'Barley',
        'Common Spices',
        'Corn Syrup',
        'Extract',
        'Honey',
        'Hops',
        'Iodine Solution',
        'Love',
        'Uncommon Spices',
        'Water',
        'Yeast'
      ],
      ingredientSearch: '',
      recipes: {
        recipe1: ['Water', 'Hops', 'Yeast'],
        coolRecipe: ['Water', 'Extract', 'Yeast', 'Corn Syrup'],
        newList:[]
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
    return object.find(key => key.toLowerCase() === value.toLowerCase());
  }

  getSearchResults = (object, value) => {
    return Object.keys(object).find(key => key === value);
  }

  handleCheckedBox(checkbox) {
    let recipeCopy = {...this.state.recipes}
    if (checkbox.checked) {
      recipeCopy.newList.push(checkbox.value);
    } else {
      recipeCopy.newList = recipeCopy.newList.filter(item => item !== checkbox.value)
    }
    this.setState({recipes: recipeCopy});
  }

  handleSearchIngredients = value => {
    if (!value) {
      return this.state.ingredients;
    }

    const result = this.getSearchIngredientsResults(this.state.ingredients, value);

    console.log('result', result);
    if (result) {
      this.setState({ingredientSearch: [result]});
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
    // deep copy
    const recipeObj = JSON.parse(JSON.stringify({[recipe]: stateCopy.recipes.newList}));
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
            <SearchRecipes 
              text="Find an Ingredient" 
              onChange={this.handleSearchIngredients}
            />
            <Ingredients 
              ingredients={this.getSearchedIngredient()}
              onChecked={this.handleCheckedBox}
            />
          </div>
          <div className="App-recipes">
            <SearchRecipes 
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
