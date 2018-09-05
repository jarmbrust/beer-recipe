import React from 'react';

class IngredientsSaveRecipe extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave = event => {
    event.preventDefault();
    this.props.onChange(event.target[0].value);
  }

  render() {
    return (
      <form onSubmit={this.handleSave}>
        <label aria-label="save recipe field">
          <input type="text" name="test" className="IngredientsSaveRecipe-text" placeholder="Save Recipe" />
        </label>
        <input className="IngredientsSaveRecipe-text" type="submit" value="Save" />
      </form>
    );
  }
}

export default IngredientsSaveRecipe;