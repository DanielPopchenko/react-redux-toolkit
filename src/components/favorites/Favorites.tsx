import React from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import RecipeItem from '../recipe-item/RecipeItem';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const favorites = useFavorites();
  const navigate = useNavigate();
  console.log(favorites);
  return (
    <div>
      <button onClick={() => navigate('/')}>See all recipes</button>
      <ul>
        {favorites.map((favorite) => (
          <RecipeItem recipe={favorite} key={favorite.id} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
