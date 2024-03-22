import React from 'react';
import styles from './RecipeItem.module.css';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

const RecipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);
  const { toggleFavourites } = useActions();

  const doesExist = favorites.some((r) => r.id === recipe.id);
  return (
    <div className={styles.item}>
      <h2>{recipe.name}</h2>

      <button onClick={() => toggleFavourites(recipe)}>
        {doesExist ? 'Remove from favourites' : 'Add to favotites'}
      </button>
    </div>
  );
};

export default RecipeItem;
