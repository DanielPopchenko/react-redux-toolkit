import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { favoritesSlice } from '../store/favorites/favorites.slice';
import { actions } from '../store/favorites/favorites.slice';
import { getUserById } from '../store/user/user.actions';
import * as userSlice from '../store/user/user.actions';
// ? Как будто у нас много экшенов
const rootActions = { ...actions, ...userSlice };

export const useActions = () => {
  const dispatch = useDispatch();

  // ! Для того чтобы закэшировать и ссылка не переобновлялась каждый раз
  // ! bindActionCreators - оборачивает все экшены в диспатч
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
