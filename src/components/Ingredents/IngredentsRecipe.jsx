import React from 'react';

const IngredentsRecipe = props => {
  return (
    <ul>
      {
        props.list.map((item, index) => {
          return <li key={index}>{item}</li>
        })
      }
    </ul>
  );
}

export default IngredentsRecipe;