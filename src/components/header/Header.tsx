import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useFavorites } from '../../hooks/useFavorites';

const Header = () => {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <div className="label-wrapper">
        <AiFillHeart fontSize={45} />
        <span className="label">{favorites.length}</span>
      </div>
    </header>
  );
};

export { Header };
