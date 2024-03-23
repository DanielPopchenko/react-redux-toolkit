import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer as favoritesReducer } from './favourites/favourites.slice';
import { userSlice } from './user/user.slice';
import { api } from './api/api';

// ! combineReducers - if we have a lot of reducers

const reducers = combineReducers({
  favorites: favoritesReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
