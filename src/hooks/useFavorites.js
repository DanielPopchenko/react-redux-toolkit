import { useSelector } from 'react-redux';

export const useFavorites = () => {
  const favorites = useSelector((state) => state.favorites);

  // ! Исправить ошибку с хуком

  //   console.log('state: ', favorites);

  return { favorites };
};
