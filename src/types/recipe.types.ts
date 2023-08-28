export interface IRecipe {
  id: number;
  image: string;
  name: string;
}

export interface IRecipeData extends Omit<IRecipe, 'id'> {}
