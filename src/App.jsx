import React, { Component } from 'react';
import './App.css';
import Ingredents from './components/Ingredents/Ingredents';
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
        coolRecipe: ['Water', 'Extract', 'Yeast'],
        newList:[]
      },
      recipeSearch: ''
    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
  //  this.searchRecipes = this.searchRecipes.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCheckedBox(checked) {
    console.log('checked', checked);
    let recipeCopy = {...this.state.recipes}
    console.log('this.recipes.newlist', recipeCopy, recipeCopy.newList, this.state.recipes.newList);
    recipeCopy.newList.push(checked);
    this.setState({recipes: recipeCopy});

    console.log('this.recipes.newlist', recipeCopy);
    console.log('this.state', this.state);
  }

//   searchRecipes(recipe) {
//  //   Object.keys(this.state.recipes, recipe) {
//       return Object.keys(this.state.recipes).find(key => this.state.recipes[key] === recipe);
//  //   }
//   }

  handleSearch = value => {
    console.log('value', value);
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
          <SearchRecipes
            recipes={this.state.recipeSearch}
            onChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}




export default App;
