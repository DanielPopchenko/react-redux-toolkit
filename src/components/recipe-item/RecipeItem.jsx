// import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
import { actions } from '../../store/favorites/favorites.slice';

const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites();

  // Так как мы создали новый кастомный хук, нам больше не нужно брать диспатч
  // const dispatch = useDispatch();

  const { toggleFavorites } = useActions();

  const doesExist = favorites.some((r) => r.id === recipe.id);

  const addToFavorites = () => {
    toggleFavorites(recipe);
  };

  return (
    <div className="item">
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      {/* action работает в одну и в обратную сторону */}
      <button onClick={addToFavorites}>{doesExist ? 'Remove from fav' : 'Add to fav'}</button>
    </div>
  );
};

export default RecipeItem;
