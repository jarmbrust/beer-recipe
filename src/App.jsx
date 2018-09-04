import React, { Component } from 'react';
import './App.css';
import Ingredients from './components/Ingredients/Ingredients';
import IngredientsRecipe from './components/Ingredients/IngredientsRecipe';
import SearchRecipes from './components/Search/SearchRecipes';
import IngredientsSaveRecipe from './components/Ingredients/IngredientsSaveRecipe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [
        'Water',
        'Hop Pellets',
        'Barley',
        'Extract',
        'Yeast',
        'Corn Syrup',
        'Iodine Solution'
      ],
      ingredientSearch: '',
      recipes: {
        recipe1: ['Water', 'Hop Pellets', 'Yeast'],
        coolRecipe: ['Water', 'Extract', 'Yeast', 'Corn Syrup'],
        newList:[]
      },
      recipeSearch: ''
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
    this.handleSearchIngredients = this.handleSearchIngredients.bind(this);
    this.handleSearchRecipes = this.handleSearchRecipes.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getSearchedRecipe = this.getSearchedRecipe.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
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
    console.log('value', value);
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

  getSearchIngredientsResults = (object, value) => {
    return object.find(key => key === value);
  }

  getSearchedIngredient = () => {
    if (!this.state.ingredientSearch) { return this.state.ingredients; }
    return this.state.ingredientSearch;
  }

  handleSearchRecipes = value => {
    const result = this.getSearchResults(this.state.recipes, value);

    if (result) {
      this.setState({recipeSearch: result});
    }
  }

  getSearchResults = (object, value) => {
    return Object.keys(object).find(key => key === value);
  }

  getSearchedRecipe = () => {
    if (!this.state.recipeSearch) { return ['']; }
    return this.state.recipes[this.state.recipeSearch];
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
        <div className="ingredients-list">
          <SearchRecipes 
            text="Find an Ingredient" 
            onChange={this.handleSearchIngredients}
          />
          <Ingredients 
            ingredients={this.getSearchedIngredient()}
            onChecked={this.handleCheckedBox}
          />
        </div>
        <div>
          <SearchRecipes 
            text="Find a Recipe"
            onChange={this.handleSearchRecipes}
          />
          <IngredientsRecipe 
            list={this.getSearchedRecipe()}
            recipeName={this.state.recipeSearch}
          />
          <IngredientsSaveRecipe onChange={this.saveRecipe} />
        </div>
      </div>
    );
  }
}

export default App;
