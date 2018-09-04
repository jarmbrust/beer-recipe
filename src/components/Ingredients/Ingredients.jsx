import React from 'react';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked = event => {
    this.props.onChecked(event.target);
  }

  render() {
    console.log('this.props', this.props);
    return (
      <ul>
        {
          this.props.ingredients.map((item, index) => {
            return <li key={index}>
                <input 
                  type="checkbox" 
                  name={item} 
                  id={item} 
                  value={item} 
                  onChange={this.handleChecked}/>
                <label htmlFor={item}>{item}</label>
              </li>
          })
        }
      </ul>
    );
  }
}

export default Ingredients;