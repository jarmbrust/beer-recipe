import React from 'react';

const IngredientsRecipe = props => {
  return (
    <ul>
      <span className="IngredientsRecipe-title">{props.recipeName}</span>
      {
        props.list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  );
}

export default IngredientsRecipe;