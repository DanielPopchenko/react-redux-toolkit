import { FormEvent, useState } from 'react';
import { useCreateRecipeMutation } from '../../store/api/recipe.api';
import { IRecipeData } from '../../types/recipe.types';

const DEFAULT_STATE: IRecipeData = {
  name: '',
  image: '',
};

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(DEFAULT_STATE);

  // useCreateRecipeMutation returns []
  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(recipe);

    // we do not have onSuccess value, so we can do the next using then(...)
    createRecipe(recipe).then(() => setRecipe(DEFAULT_STATE));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{ marginBottom: 4 }}>Create new recipe:</p>
      <label>
        <input
          type="text"
          placeholder="Name"
          value={recipe.name}
          onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image"
          value={recipe.image}
          onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
        />

        <button>Create</button>
      </label>
    </form>
  );
};

export default CreateRecipe;
