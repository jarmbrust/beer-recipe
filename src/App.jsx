import React, { Component } from 'react';
import './App.css';
import Ingredents from './components/Ingredents/Ingredents';
import IngredentsRecipe from './components/Ingredents/IngredentsRecipe';
import SearchRecipes from './components/Search/SearchRecipes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        'Water': { checked: false },
        'Hop Pellets': { checked: false },
        'Barley': { checked: false },
        'Extract': { checked: false },
        'Yeast': { checked: false },
        'Corn Syrup': { checked: false },
        'Iodine Solution': { checked: false }
      },
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
  }

  handleCheckedBox(checked) {
    let recipeCopy = {...this.state.recipes}
    recipeCopy.newList.push(checked);
    this.setState({recipes: recipeCopy});

    console.log('this.state', this.state);
  }

  handleSearchRecipes = value => {
    //console.log('value', value, this.state.recipes, Object.keys(this.state.recipes));

    const result = this.getSearchResults(this.state.recipes, value);
    //console.log('test', result);

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
    // let recipeCopy = {...this.state.recipes}
    // console.log('recipeCopy', recipeCopy);
    if (!this.state.recipeSearch) {return [''];}
    console.log('this.state.recipeSearch', this.state.recipeSearch)
    console.log('this.state', this.state, this.state.recipes[this.state.recipeSearch]);
    return this.state.recipes[this.state.recipeSearch];
  }
  
  render() {
    console.log(this.state.ingredients);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Beer Recipe Organizer</h1>
        </header>
        <div className="ingredients-list">
          <Ingredents 
            ingredents={this.state.ingredients}
            onChecked={this.handleCheckedBox}
          />
        </div>
        <div>
          <SearchRecipes
            onChange={this.handleSearchRecipes}
          />
         <IngredentsRecipe list={this.getSearchedRecipe() } />
        </div>
      </div>
    );
  }
}

export default App;
