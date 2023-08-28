import React from 'react';
import { useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';

const CreateRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    name: '',
    image: '',
  });

  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe);

    setRecipe({
      name: '',
      image: '',
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          placeholder="Name"
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
      </label>

      <label>
        <input
          type="text"
          name="name"
          value={recipe.image}
          placeholder="Image"
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
        />
      </label>

      <button type="submit">Create</button>
    </form>
  );
};

export default CreateRecipeForm;
