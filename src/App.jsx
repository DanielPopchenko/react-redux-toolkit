import React from 'react';
import RecipeItem from './components/recipe-item/RecipeItem';
import { BsHeartFill } from 'react-icons/bs';
import Header from './components/header/Header';
import User from './components/user/User';
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/create-recipe/CreateRecipe';

// ! IMAGINE if we had a user(1) and when it`s logged in, we show data, when it not (null) we don`t show
const userId = null;

const App = () => {
  // ! HERE skip: !userId, we are saying that if we don`t have user, we shouldn`t do our requests and show data
  const { data, isLoading, isError } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });
  console.log(data);
  return (
    <section>
      <Header />

      <CreateRecipe />

      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ul>
            {isLoading ? (
              <p>Loading...</p>
            ) : data ? (
              <>
                {data.map((recipe) => (
                  <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
              </>
            ) : isError ? (
              <p>Error occured</p>
            ) : (
              <p>No recipes found.</p>
            )}
          </ul>
        </div>
      </div>
      {/* <User /> */}
    </section>
  );
};

export default App;
