import React from 'react';

class IngredentsSaveRecipe extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = event => {
    event.preventDefault();
    console.log('event.target[0].value', event.target[0].value)
    this.props.onChange(event.target[0].value);
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <label>
          Name:
          <input type="text" name="test" id="recipe-save-text" placeholder="Save Recipe" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default IngredentsSaveRecipe;