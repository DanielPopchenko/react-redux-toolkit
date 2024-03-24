import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import ErrorElement from './components/error-element/ErrorElement';
import HomePage from './pages/HomePage';
import Favorites from './components/favorites/Favorites';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorElement />,
  },
  { path: '/favorites', element: <Favorites /> },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
);
