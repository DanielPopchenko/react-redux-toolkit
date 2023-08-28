import React from 'react';
import CreateRecipeForm from './components/form/CreateRecipeForm';
import { Header } from './components/header/Header';
import RecipeItem from './components/recipe-item/RecipeItem';
import { User } from './components/user/User';
import { useGetRecipesQuery } from './store/api/api';

// null - слетела авторизация, 1 - она есть
const userId = 1;

const App = () => {
  // ! skip: !userId - если авторизация слетела
  const { data, isLoading } = useGetRecipesQuery(undefined, { skip: !userId });

  return (
    <>
      <Header />

      <section className="section-centered">
        <CreateRecipeForm />

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
