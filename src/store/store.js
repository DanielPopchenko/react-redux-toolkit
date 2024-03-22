import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favourites/favourites.slice';

// combineReducers - if we have a lot of reducers

const reducers = combineReducers({ favorites: favoritesReducer });

export const store = configureStore({
  reducer: reducers,
});
