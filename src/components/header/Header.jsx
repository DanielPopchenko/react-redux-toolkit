import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { useFavorites } from '../../hooks/useFavorites';

const Header = () => {
  const favorites = useFavorites();
  return (
    <header className={styles.header}>
      <BsHeartFill
        style={{
          color: '#9900ff',
          fontSize: 30,
        }}
      />

      <span className={styles.favQuantity}>{favorites.length}</span>
    </header>
  );
};

export default Header;
