import React from 'react';
import { useState } from 'react';
import CreateRecipeForm from './components/form/CreateRecipeForm';
import { Header } from './components/header/Header';
import RecipeItem from './components/recipe-item/RecipeItem';
import { User } from './components/user/User';
import { useGetRecipesQuery } from './store/api/api';

// null - слетела авторизация, 1 - она есть
const userId = 1;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [queryTerm, setQueryTerm] = useState('');
  // ! skip: !userId - если авторизация слетела
  const { data, isLoading } = useGetRecipesQuery(queryTerm);
  // undefined, { skip: !userId };

  const handleSearch = () => {
    console.log('search');
    setQueryTerm(searchTerm);
  };

  return (
    <>
      <Header />

      <section className="section-centered">
        <CreateRecipeForm />

        <div style={{ padding: 10, textAlign: 'center', display: 'block' }}>
          <p>Want to find something ?</p>
          <input
            type="search"
            value={searchTerm}
            placeholder="Name of the dish"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button type="button" onClick={() => handleSearch()}>
            Search
          </button>
        </div>

        {/* <User /> */}
        <div>
          {isLoading ? (
            <p>Loading...</p>
          ) : data ? (
            <>
              {data.map((recipe) => (
                <RecipeItem recipe={recipe} key={recipe.id} />
              ))}
            </>
          ) : (
            <p>Data was not found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default App;
