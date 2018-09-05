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
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <label aria-label="search field">
          <input 
            type="text" 
            name="test" 
            className="SearchRecipes-text" 
            placeholder={this.props.text} 
            onChange={this.handleChange}
          />
        </label>
        <input 
          className="SearchRecipes-submit" 
          type="submit" 
          value="Search"
        />
      </form>
    );
  }
}

export default SearchRecipes;