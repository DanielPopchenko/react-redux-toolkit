import React from 'react';
import styles from './RecipeItem.module.css';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';

const RecipeItem = ({ recipe }) => {
  const favorites = useFavorites();
  const { toggleFavourites } = useActions();

  const doesExist = favorites.some((r) => r.id === recipe.id);
  return (
    <div className={styles.item}>
      <div className="">
        <h2>{recipe.name}</h2>
        <button onClick={() => toggleFavourites(recipe)}>
          {doesExist ? 'Remove from favourites' : 'Add to favotites'}
        </button>
      </div>
      <div className="">
        {' '}
        <img src={recipe.image} alt={recipe.name} width={130} height={90} />
      </div>
    </div>
  );
};

export default RecipeItem;
