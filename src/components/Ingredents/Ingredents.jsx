import React from 'react';

class Ingredents extends React.Component {
  constructor(props) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked = event => {
    console.log('event.target', event.target);
    this.props.onChecked(event.target.value)
  }

  render() {
    return (
      <ul>
        {
          Object.keys(this.props.ingredents).map((item, index) => {
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

export default Ingredents;