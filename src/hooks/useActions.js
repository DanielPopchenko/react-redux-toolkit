import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from '../store/favourites/favourites.slice';

const rootActions = {
  ...actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  // ! for optimisation, to prevent it from recreating
  // ? bindActionCreators wraps all the actions with the dispatch
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
