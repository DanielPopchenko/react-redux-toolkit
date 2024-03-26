export interface IUser {
  id: number;
  name: string;
}

export interface IInitialUser {
  user: IUser;
  isLoading: boolean;
  error: string | null;
}
