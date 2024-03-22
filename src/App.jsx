import React from 'react';
import RecipeItem from './components/recipe-item/RecipeItem';

const App = () => {
  return (
    <div>
      <div>
        <RecipeItem recipe={{ name: 'Lazania', id: '1' }} />
        <RecipeItem recipe={{ name: 'Pasta', id: '2' }} />
        <RecipeItem recipe={{ name: 'Pizza', id: '3' }} />
      </div>
    </div>
  );
};

export default App;
