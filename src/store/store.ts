import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { api } from './api/api';
import { reducer as favoriteReducer } from './favorites/favorites.slice';
import { userSlice } from './user/user.slice';

const logger = createLogger({});

// ! Это для того случая, если у нас в приложении много редьюсеров
const reducers = combineReducers({
  favorites: favoriteReducer,
  users: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
