import React, { Component } from 'react';
import './App.css';
import Ingredents from './components/Ingredents/Ingredents';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // results: null,
        // searchKey: '',
        // searchTerm: DEFAULT_QUERY,
        // error: null,
        // isLoading: false

      ingredients: {
        'Water': { checked: false },
        'Hop Pellets': { checked: false },
        'Barley': { checked: false },
        'Extract': { checked: false },
        'Yeast': { checked: false },
        'Corn Syrup': { checked: false },
        'Iodine Solution': { checked: false }
      },
      recipies: {
        recipe1: ['Water', 'Hop Pellets', 'Yeast'],
        coolRecipe: ['Water', 'Extract', 'Yeast'],
        newList:[]
      }

    };

    this.handleCheckedBox = this.handleCheckedBox.bind(this);
  }

  handleCheckedBox(checked) {
    console.log('checked', checked);
    let recipeCopy = {...this.state.recipies}
    console.log('this.recipies.newlist', recipeCopy, recipeCopy.newList, this.state.recipies.newList);
    recipeCopy.newList.push(checked);
    this.setState({recipies: recipeCopy});

    console.log('this.recipies.newlist', recipeCopy);
    console.log('this.state', this.state);
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
      </div>
    );
  }
}




export default App;
