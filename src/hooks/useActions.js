import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions } from '../store/favourites/favourites.slice';
// ! in a user.slice file we do not write any reducers, so if we imported feom there,
// ! we would have had an error
import * as userActions from '../store/user/user.actions';

const rootActions = {
  ...actions,
  // ! here we have asynchonous actions so we need to import them in a different way
  ...userActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  // ! for optimisation, to prevent it from recreating
  // ? bindActionCreators wraps all the actions with the dispatch
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
