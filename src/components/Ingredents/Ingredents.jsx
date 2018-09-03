import React from 'react';

class Ingredents extends React.Component {
  constructor(props) {
    super(props);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked(e) {
    console.log('e.target', e.target);
    this.props.onChecked(e.target.value)
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