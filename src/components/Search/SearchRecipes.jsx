import React from 'react';

class SearchRecipes extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch = event => {
    event.preventDefault();
    this.props.onChange(event.target[0].value);
  }

  handleChange = event => {
    console.log('event', event.target.value);
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <label>
          Name:
          <input type="text" name="test" id="recipe-search-text" placeholder={this.props.text} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchRecipes;