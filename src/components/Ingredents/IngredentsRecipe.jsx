import React from 'react';

const IngredentsRecipe = props => {
  return (
    <ul><span className="recipe-title">{props.recipeName}</span>
      {
        props.list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  );
}

export default IngredentsRecipe;