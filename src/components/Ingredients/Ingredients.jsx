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
      <table className="Ingredients-table">
        <tbody>
        {
          this.props.ingredients.map((item, index) => {
            return <tr key={index}>
              <td className="Ingredients-checkbox">
                <input 
                  key={index}
                  type="checkbox" 
                  name={item} 
                  id={item} 
                  value={item} 
                  onChange={this.handleChecked}/>
              </td>
              <td className="Ingredients-checkbox-label">
                <label htmlFor={item}>{item}</label>
              </td>
            </tr>
          })
        }
        </tbody>
      </table>
    );
  }
}

export default Ingredients;