import React from 'react';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
   // this.enterValueHandler = this.enterValueHandler.bind(this);
  }

  handleSearch = (event) => {
    console.log('searching');
    //this.props.onChecked(e.target.value)
    //console.log(event.target.value);

    event.preventDefault();
    console.log('>>>', event.target[0].value);


  }

  handleChange = (event) => {
    console.log('changing');
    //this.props.onChecked(e.target.value)
    console.log(event.target.value);
  }

  


  render() {

    return (
      <form onSubmit={this.handleSearch}>
        <label>
          Name:
          <input type="text" name="test" id="recipe-search-text" placeholder="Find a Recipe" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchRecipes;