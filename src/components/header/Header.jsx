import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { useFavorites } from '../../hooks/useFavorites';
import { Link } from 'react-router-dom';

const Header = () => {
  const favorites = useFavorites();
  return (
    <header className={styles.header}>
      <Link to="/favorites">
        <BsHeartFill
          style={{
            color: '#9900ff',
            fontSize: 30,
          }}
        />
      </Link>

      <span className={styles.favQuantity}>{favorites.length}</span>
    </header>
  );
};

export default Header;
