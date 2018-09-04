import React, { Component } from 'react';
import './App.css';
import Ingredents from './components/Ingredents/Ingredents';
import IngredentsRecipe from './components/Ingredents/IngredentsRecipe';
import SearchRecipes from './components/Search/SearchRecipes';
import IngredentsSaveRecipe from './components/Ingredents/IngredentsSaveRecipe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredents: [
        'Water',
        'Hop Pellets',
        'Barley',
        'Extract',
        'Yeast',
        'Corn Syrup',
        'Iodine Solution'
      ],
      recipes: {
        recipe1: ['Water', 'Hop Pellets', 'Yeast'],
        coolRecipe: ['Water', 'Extract', 'Yeast', 'Corn Syrup'],
        newList:[]
      },
      recipeSearch: ''
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
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

  handleSearchRecipes = value => {
    const result = this.getSearchResults(this.state.recipes, value);

    if (result) {
      let recipeCopy = {...this.state.recipeSearch}
      recipeCopy = result;
      this.setState({recipeSearch: recipeCopy});
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
        <div className="ingredents-list">
          <Ingredents 
            ingredents={this.state.ingredents}
            onChecked={this.handleCheckedBox}
          />
        </div>
        <div>
          <SearchRecipes
            onChange={this.handleSearchRecipes}
          />
         <IngredentsRecipe list={this.getSearchedRecipe()} recipeName={this.state.recipeSearch}/>
         <IngredentsSaveRecipe onChange={this.saveRecipe} />
        </div>
      </div>
    );
  }
}

export default App;
